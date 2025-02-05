// server.js

const express = require('express');
const path = require('path');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const stripe = require('stripe');
const morgan = require('morgan');
const { promisify } = require('util');
const bodyParser = require('body-parser');
const cors = require('cors'); // <-- CORS package still used
require('dotenv').config();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || null; // set this in production!
const stripeInstance = stripe(STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || 'somesecret';

// Allow ANY domain for CORS (not secure, just temporary as requested)
app.use(cors());

// Use morgan for HTTP logging
app.use(morgan('combined'));

// Configure express to parse JSON and URL-encoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware with 7-day expiration.
// In production, ensure you set 'secure' and 'sameSite' appropriately.
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === 'production', // serve secure cookies in production
      httpOnly: true,
      sameSite: 'lax',
    },
  })
);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err);
    process.exit(1); // exit if we cannot connect to the database
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Promisify some of the db methods for convenience
const dbAll = promisify(db.all).bind(db);
const dbGet = promisify(db.get).bind(db);
const dbRun = (...args) => {
  return new Promise((resolve, reject) => {
    db.run(...args, function (err) {
      if (err) {
        return reject(err);
      }
      resolve(this);
    });
  });
};

// Create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    donation_amount INTEGER,
    email TEXT,
    first_name TEXT,
    last_name TEXT,
    card_name TEXT,
    country TEXT,
    postal_code TEXT,
    payment_intent_id TEXT,
    payment_intent_status TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);
});

// -------------------------
// API Endpoints
// -------------------------

// Endpoint to create a PaymentIntent and record a donation
app.post('/create-payment-intent', async (req, res, next) => {
  try {
    const {
      donationAmount,
      email,
      firstName,
      lastName,
      cardName,
      country,
      postalCode,
    } = req.body;

    if (!donationAmount || !email) {
      return res.status(400).json({ error: 'Donation amount and email are required.' });
    }

    // Convert donation amount from dollars to cents
    const amountCents = Math.round(Number(donationAmount) * 100);
    if (isNaN(amountCents) || amountCents <= 0) {
      return res.status(400).json({ error: 'Invalid donation amount.' });
    }

    // Create a PaymentIntent with Stripe
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amountCents,
      currency: 'usd',
      receipt_email: email,
    });

    // Insert a donation record with status "pending"
    await dbRun(
      `INSERT INTO donations (
        donation_amount,
        email,
        first_name,
        last_name,
        card_name,
        country,
        postal_code,
        payment_intent_id,
        payment_intent_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        amountCents,
        email,
        firstName || null,
        lastName || null,
        cardName || null,
        country || null,
        postalCode || null,
        paymentIntent.id,
        'pending',
      ]
    );

    // Return the client secret so we can confirm the payment on the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Error in /create-payment-intent:', err);
    next(err);
  }
});

// Stripe webhook endpoint to update donation record when payment succeeds.
// Use bodyParser.raw to get the raw payload.
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  let event;

  // Verify webhook signature if STRIPE_WEBHOOK_SECRET is set
  if (STRIPE_WEBHOOK_SECRET) {
    const signature = req.headers['stripe-signature'];
    try {
      event = stripeInstance.webhooks.constructEvent(
        req.body,
        signature,
        STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Stripe webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    // WARNING: In production, you should verify signatures.
    try {
      event = JSON.parse(req.body);
    } catch (err) {
      console.error('Webhook parse error:', err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }

  // Handle the event
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    dbRun(
      `UPDATE donations SET payment_intent_status = ? WHERE payment_intent_id = ?`,
      ['succeeded', paymentIntent.id]
    )
      .then(() => {
        console.log(`Donation record updated for PaymentIntent ${paymentIntent.id}`);
      })
      .catch((err) => {
        console.error('DB Update Error in webhook:', err);
      });
  }

  // Return a 200 response to acknowledge receipt of the event
  res.json({ received: true });
});

// -------------------------
// Admin API Endpoints
// -------------------------

// Middleware to check if admin is authenticated
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

// Endpoint to check if any admin user exists
app.get('/admin-api/check-setup', async (req, res, next) => {
  try {
    const row = await dbGet(`SELECT COUNT(*) as count FROM admin_users`);
    res.json({ setup: row.count > 0 });
  } catch (err) {
    console.error('Error in /admin-api/check-setup:', err);
    next(err);
  }
});

// Admin registration endpoint
app.post('/admin-api/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required.' });
    }
    const row = await dbGet(`SELECT COUNT(*) as count FROM admin_users`);
    const isFirstUser = row.count === 0;
    if (!isFirstUser && !(req.session && req.session.user)) {
      return res
        .status(401)
        .json({ error: 'Unauthorized. Please log in as admin to add new users.' });
    }
    const hash = await bcrypt.hash(password, 10);
    await dbRun(`INSERT INTO admin_users (username, password) VALUES (?, ?)`, [
      username,
      hash,
    ]);
    res.json({ message: 'Admin user registered successfully.' });
  } catch (err) {
    console.error('Error in /admin-api/register:', err);
    next(err);
  }
});

// Admin login endpoint
app.post('/admin-api/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required.' });
    }
    const user = await dbGet(
      `SELECT * FROM admin_users WHERE username = ?`,
      [username]
    );
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      req.session.user = { id: user.id, username: user.username };
      res.json({ message: 'Login successful.' });
    } else {
      res.status(401).json({ error: 'Invalid credentials.' });
    }
  } catch (err) {
    console.error('Error in /admin-api/login:', err);
    next(err);
  }
});

// Admin logout endpoint
app.post('/admin-api/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error during logout:', err);
      return next(err);
    }
    res.json({ message: 'Logged out.' });
  });
});

// GET /admin-api/donations endpoint
app.get('/admin-api/donations', isAuthenticated, async (req, res, next) => {
  try {
    let donations = await dbAll(
      `SELECT * FROM donations ORDER BY created_at DESC`
    );
    // For each pending donation, update the status by retrieving the PaymentIntent from Stripe.
    for (let donation of donations) {
      if (donation.payment_intent_status === 'pending') {
        try {
          const paymentIntent = await stripeInstance.paymentIntents.retrieve(
            donation.payment_intent_id
          );
          if (paymentIntent.status !== donation.payment_intent_status) {
            await dbRun(
              `UPDATE donations SET payment_intent_status = ? WHERE id = ?`,
              [paymentIntent.status, donation.id]
            );
            donation.payment_intent_status = paymentIntent.status;
          }
        } catch (err) {
          console.error(
            `Error fetching PaymentIntent for donation id ${donation.id}:`,
            err
          );
        }
      }
    }
    res.json({ donations });
  } catch (err) {
    console.error('Error in /admin-api/donations:', err);
    next(err);
  }
});

// Endpoint to add a new admin user (requires authentication)
app.post('/admin-api/users', isAuthenticated, async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required.' });
    }
    const hash = await bcrypt.hash(password, 10);
    await dbRun(`INSERT INTO admin_users (username, password) VALUES (?, ?)`, [
      username,
      hash,
    ]);
    res.json({ message: 'New admin user added successfully.' });
  } catch (err) {
    console.error('Error in /admin-api/users:', err);
    next(err);
  }
});

// -------------------------
// Error Handling Middleware
// -------------------------

// Catch-all error handler middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'An internal server error occurred.' });
});

// -------------------------
// Process-Level Error Handlers
// -------------------------

// Catch unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  // Optionally exit process: process.exit(1);
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Optionally exit process: process.exit(1);
});

// -------------------------
// Start the Server
// -------------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
