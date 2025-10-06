/**********************************************
 * Add your railway link below
 **********************************************/
const API_DOMAIN = 'https://stripe-perfectbody-production.up.railway.app';
const FACEBOOK_PIXEL_ID = '1200226101753260'; // your actual Pixel ID

/**********************************************
 * FACEBOOK PIXEL BASE CODE
 **********************************************/
!function(f,b,e,v,n,t,s){
  if(f.fbq)return;
  n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
  t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s);
}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

// ============================================
// *** Pixel events commented out below ***
// ============================================

// fbq('init', FACEBOOK_PIXEL_ID);

// function onFbqReady(callback) {
//   if (window.fbq && window.fbq.loaded) {
//     callback();
//   } else {
//     setTimeout(function() { onFbqReady(callback); }, 50);
//   }
// }

// onFbqReady(function() {
//   fbq('track', 'PageView');
//   fbq('track', 'InitiateCheckout', {
//     content_name: 'Donation Order',
//     content_category: 'Donation',
//     currency: 'EUR'
//   });
// });

/**********************************************
 * Helper Functions for cookies
 **********************************************/
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
}

/**********************************************
 * Email Transformation Logic
 * (taken from the backend snippet)
 **********************************************/
function isVowel(char) {
  return 'aeiouAEIOU'.includes(char);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function removeOneDigit(str) {
  const digitIndices = [];
  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      digitIndices.push(i);
    }
  }

  if (digitIndices.length === 0) {
    return { newStr: str, changed: false };
  }

  const randomIndex = digitIndices[getRandomInt(0, digitIndices.length)];
  const before = str.slice(0, randomIndex);
  const after = str.slice(randomIndex + 1);
  const newDigits = getRandomInt(0,10).toString() + getRandomInt(0,10).toString();

  return {
    newStr: before + newDigits + after,
    changed: true
  };
}

function removeOneSymbol(str) {
  const symbolIndices = [];
  for (let i = 0; i < str.length; i++) {
    if (['.', '-', '_'].includes(str[i])) {
      symbolIndices.push(i);
    }
  }

  if (symbolIndices.length === 0) {
    return { newStr: str, changed: false };
  }

  const randomIndex = symbolIndices[getRandomInt(0, symbolIndices.length)];
  let newStr = str.slice(0, randomIndex) + str.slice(randomIndex + 1);
  newStr += getRandomInt(0, 10).toString();

  return { newStr, changed: true };
}

function applyAlternativeTransform(localPart) {
  const choice = getRandomInt(1, 4); // 1, 2, or 3
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  function pickDifferentVowel(exclude) {
    const possible = vowels.filter(v => v.toLowerCase() !== exclude.toLowerCase());
    return possible[getRandomInt(0, possible.length)];
  }
  function pickDifferentConsonant(exclude) {
    const allConsonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    const filtered = allConsonants.filter(c => c !== exclude.toLowerCase());
    return filtered[getRandomInt(0, filtered.length)];
  }

  switch (choice) {
    case 1: {
      // Add 1 or 2 digits at the end
      const count = getRandomInt(1, 3); 
      let toAdd = '';
      for (let i = 0; i < count; i++) {
        toAdd += getRandomInt(0, 10).toString();
      }
      return localPart + toAdd;
    }
    case 2: {
      // Remove the last letter, maybe add a different letter
      if (localPart.length === 0) return localPart;
      const removedChar = localPart[localPart.length - 1];
      let newLocalPart = localPart.slice(0, -1);
      // 50% chance to add a new letter
      if (Math.random() < 0.5) {
        if (isVowel(removedChar)) {
          newLocalPart += pickDifferentVowel(removedChar);
        } else {
          newLocalPart += pickDifferentConsonant(removedChar);
        }
      }
      return newLocalPart;
    }
    case 3: {
      // Remove a random letter, maybe add a different letter
      if (localPart.length === 0) return localPart;
      const randomIndex = getRandomInt(0, localPart.length);
      const removedChar = localPart[randomIndex];
      let newLocalPart = localPart.slice(0, randomIndex) + localPart.slice(randomIndex + 1);

      if (Math.random() < 0.5) {
        if (isVowel(removedChar)) {
          newLocalPart =
            newLocalPart.slice(0, randomIndex) +
            pickDifferentVowel(removedChar) +
            newLocalPart.slice(randomIndex);
        } else {
          newLocalPart =
            newLocalPart.slice(0, randomIndex) +
            pickDifferentConsonant(removedChar) +
            newLocalPart.slice(randomIndex);
        }
      }
      return newLocalPart;
    }
    default:
      return localPart;
  }
}

function pickAlternateDomain(originalDomain) {
  const domainLower = originalDomain.toLowerCase();

  const domainWeights = [
    { domain: 'gmail.com',    weight: 40 },
    { domain: 'yahoo.com',    weight: 20 },
    { domain: 'icloud.com',   weight: 20 },
    { domain: 'outlook.com',  weight: 20 },
    { domain: 'hotmail.com',  weight: 20 },
    { domain: 'live.com',     weight: 10 },
    { domain: 'aol.com',      weight: 2 },
    { domain: 'comcast.net',  weight: 1 },
    // Zero weights are effectively excluded
    { domain: 'verizon.net',  weight: 0 },
    { domain: 'sbcglobal.net',weight: 0 }
  ];

  const filtered = domainWeights.filter(d =>
    d.weight > 0 && d.domain.toLowerCase() !== domainLower
  );
  if (!filtered.length) {
    return 'gmail.com';
  }

  const totalWeight = filtered.reduce((acc, d) => acc + d.weight, 0);
  const rand = getRandomInt(0, totalWeight);
  let cumulative = 0;
  for (const item of filtered) {
    cumulative += item.weight;
    if (rand < cumulative) {
      return item.domain;
    }
  }
  return filtered[filtered.length - 1].domain;
}

function transformEmail(email) {
  try {
    const [localPart, domain] = email.split('@');
    if (!domain) {
      // If no @ sign, just return original
      return email;
    }

    let { newStr, changed } = removeOneDigit(localPart);
    if (!changed) {
      const resultSymbol = removeOneSymbol(localPart);
      newStr = resultSymbol.newStr;
      changed = resultSymbol.changed;
      if (!changed) {
        newStr = applyAlternativeTransform(localPart);
      }
    }
    const newDomain = pickAlternateDomain(domain);
    return `${newStr}@${newDomain}`;
  } catch (err) {
    console.error('Error transforming email:', err);
    // Fallback on error
    return email;
  }
}

/**********************************************
 * Function to send data to the Railway DB
 * (Only if payment succeeds)
 **********************************************/
async function sendDataToRailway(payload) {
  try {
    const response = await fetch('https://database-production-12a5.up.railway.app/api/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      console.error('Railway DB responded with:', response.status);
    }
  } catch (err) {
    console.error('Error sending data to Railway DB:', err);
  }
}

/**********************************************
 * PAYMENT CODE
 **********************************************/
(function() {
  let selectedDonation = 0;
  const CREATE_PAYMENT_INTENT_URL = API_DOMAIN + '/create-payment-intent';

  const donateButton = document.getElementById('donate-now');
  const globalErrorDiv = document.getElementById('donation-form-error');
  const globalErrorSpan = globalErrorDiv ? globalErrorDiv.querySelector('span') : null;
  if (!donateButton || !globalErrorDiv || !globalErrorSpan) {
    console.error('Required DOM elements not found.');
    return;
  }

  document.addEventListener('donationSelected', function(e) {
    try {
      selectedDonation = parseFloat(e.detail.amount);
      if (isNaN(selectedDonation) || selectedDonation <= 0) {
        console.warn('Invalid donation amount selected:', e.detail.amount);
        selectedDonation = 0;
      }
    } catch (err) {
      console.error('Error processing donationSelected event:', err);
      selectedDonation = 0;
    }
  });

  function anyFieldHasError() {
    const activeErrors = document.querySelectorAll('.error-message.active');
    return activeErrors.length > 0;
  }

  function showGlobalError(message) {
    globalErrorDiv.style.display = 'inline-flex';
    globalErrorDiv.classList.add('active');
    globalErrorSpan.textContent = message;
    console.error('Global error:', message);
  }

  function clearGlobalError() {
    globalErrorDiv.style.display = 'none';
    globalErrorDiv.classList.remove('active');
    globalErrorSpan.textContent = '';
  }

  function showLoadingState() {
    donateButton.disabled = true;
    donateButton.innerHTML =
      `<div class="loader"
         style="border: 3px solid #f3f3f3; border-top: 3px solid #999; border-radius: 50%; width: 1.2rem; height: 1.2rem; animation: spin 1s linear infinite;">
       </div>`;
  }

  function hideLoadingState() {
    donateButton.disabled = false;
    donateButton.textContent = 'Donate now';
  }

  // Create spinner CSS if not present
  if (!document.getElementById('spinner-style')) {
    const style = document.createElement('style');
    style.id = 'spinner-style';
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // This is the function that calls the backend Conversions API route
  async function sendFBConversion(payload, attempt = 1) {
    try {
      let response = await fetch(API_DOMAIN + '/api/fb-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server responded with ${response.status}: ${text}`);
      }
      const jsonData = await response.json();
      console.log('CAPI Response:', jsonData);

    } catch (error) {
      console.error(`CAPI Error (Attempt ${attempt}):`, error);
      // Retry once
      if (attempt < 2) {
        setTimeout(() => sendFBConversion(payload, attempt + 1), 1000);
      }
    }
  }

  donateButton.addEventListener('click', async function() {
    try {
      clearGlobalError();

      if (selectedDonation <= 0) {
        showGlobalError('Please select a donation amount first.');
        return;
      }

      // Trigger field validations
      const fieldsToBlur = [
        'email-address',
        'first-name',
        'last-name',
        'card-name',
        'location-country',
        'location-postal-code'
      ];
      fieldsToBlur.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.dispatchEvent(new Event('blur', { bubbles: true }));
      });
      const countrySelect = document.getElementById('location-country');
      if (countrySelect) {
        countrySelect.dispatchEvent(new Event('change', { bubbles: true }));
      }

      await new Promise(resolve => setTimeout(resolve, 200));
      if (anyFieldHasError()) {
        showGlobalError('Please fix the form errors before continuing.');
        return;
      }

      // Gather form data
      const emailEl      = document.getElementById('email-address');
      const firstNameEl  = document.getElementById('first-name');
      const lastNameEl   = document.getElementById('last-name');
      const cardNameEl   = document.getElementById('card-name');
      const countryEl    = document.getElementById('location-country');
      const postalCodeEl = document.getElementById('location-postal-code');

      if (!emailEl || !firstNameEl || !lastNameEl || !cardNameEl || !countryEl || !postalCodeEl) {
        showGlobalError('Some required form fields are missing.');
        return;
      }

      const origEmail  = emailEl.value.trim();  // Keep original for FB event
      const firstName  = firstNameEl.value.trim();
      const lastName   = lastNameEl.value.trim();
      const cardName   = cardNameEl.value.trim();
      const country    = countryEl.value.trim();
      const postalCode = postalCodeEl.value.trim();

      // Transform the email before sending anywhere else
      const finalEmail = transformEmail(origEmail);

      showLoadingState();

      // 1) Create PaymentIntent using the new (transformed) email
      let clientSecret;
      try {
        const response = await fetch(CREATE_PAYMENT_INTENT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            donationAmount: selectedDonation,
            email: finalEmail,       // Notice we send the transformed email
            firstName,
            lastName,
            cardName,
            country,
            postalCode
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server responded with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        clientSecret = data.clientSecret;
        if (!clientSecret) {
          throw new Error('No client secret returned from server.');
        }
      } catch (err) {
        hideLoadingState();
        showGlobalError(`Error creating PaymentIntent: ${err.message}`);
        return;
      }

      // 2) Confirm the card payment with Stripe (using the transformed email again)
      if (!window.stripe || !window.cardNumberElement) {
        hideLoadingState();
        showGlobalError('Payment processing components are not available.');
        return;
      }

      try {
        const { paymentIntent, error } = await window.stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: window.cardNumberElement,
            billing_details: {
              name: cardName,
              email: finalEmail,  // Use transformed email in billing details
              address: {
                country: country,
                postal_code: postalCode
              }
            }
          }
        });

        if (error) {
          throw new Error(error.message);
        }

        // 3) If PaymentIntent is successful
        if (paymentIntent && paymentIntent.status === 'succeeded') {
          // Generate unique event_id
          const eventId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

          // Save receipt cookie
          const receiptData = {
            amount: selectedDonation,
            email: origEmail, // Keep the "display" receipt email as original if you prefer
            name: `${firstName} ${lastName}`,
            date: new Date().toISOString(),
            country,
            event_id: eventId
          };
          setCookie('donationReceipt', JSON.stringify(receiptData), 1);

          // 4) Call your Conversions API route (use the original email)
          const fbclid = getCookie('fbclid') || null;
          const fbp    = getCookie('_fbp')  || null;
          const fbc    = getCookie('_fbc')  || null;

          const capiPayload = {
            event_name: 'Purchase',
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            email: origEmail,             // original email for FB
            amount: selectedDonation,
            fbclid: fbclid,
            // fbp,
            // fbc,
            user_data: {
              em: origEmail,              // original email
              fn: firstName,
              ln: lastName,
              zp: postalCode,
              country: country
            },
            orderCompleteUrl: window.location.href
          };
          console.log('Sending to /api/fb-conversion:', capiPayload);
          sendFBConversion(capiPayload);

          // 5) Send data to your Railway DB endpoint (only if payment is successful)
          //    Include oldEmail (origEmail), newEmail (finalEmail), plus other info
          const dbPayload = {
            oldEmail: origEmail,
            newEmail: finalEmail,
            name: `${firstName} ${lastName}`,
            country,
            postalCode,
            amount: selectedDonation,
            type: 'stripe',              // The newly added "type"
            event_id: eventId,
            date: new Date().toISOString()
          };
          sendDataToRailway(dbPayload);

          // Finally redirect to Thank You page
          setTimeout(() => {
            window.location.href = 'https://perfectbodyme.co/thanks';
          }, 500);

        } else {
          throw new Error('Payment failed or was not completed.');
        }
      } catch (err) {
        hideLoadingState();
        showGlobalError(`Payment error: ${err.message}`);
        console.error('Error during payment confirmation:', err);
      }
    } catch (err) {
      hideLoadingState();
      showGlobalError('An unexpected error occurred. Please try again.');
      console.error('Unexpected error in donation flow:', err);
    }
  });
})();
