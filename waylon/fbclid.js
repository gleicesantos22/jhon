(function() {
  // === CONFIGURATION ===
  // Your actual Facebook Pixel ID
  const FACEBOOK_PIXEL_ID = '1139984163733594';

  /**
   * Retrieves the value of a query parameter from the URL.
   * @param {string} param - The name of the query parameter.
   * @returns {string|null} - The value of the query parameter or null if not found.
   */
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Sets a cookie with the specified name, value, and expiration in days.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value to be stored in the cookie.
   * @param {number} days - Number of days until the cookie expires.
   */
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    console.log(`[setCookie] Set cookie: ${name}=${value}`);
  }

  /**
   * Retrieves the value of a specific cookie.
   * @param {string} name - The name of the cookie.
   * @returns {string|null} - The value of the cookie or null if not found.
   */
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
      return decodeURIComponent(match[2]);
    }
    return null;
  }

  /**
   * Stores Facebook data in localStorage.
   * @param {Object} data - An object containing fbclid, fbp, and fbc.
   */
  function storeFacebookData(data) {
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        window.localStorage.setItem(key, value);
        console.log(`[storeFacebookData] Stored in localStorage: ${key}=${value}`);
      }
    });
  }

  /**
   * Generates a new _fbc value based on fbclid and current timestamp.
   * @param {string} fbclid - The fbclid value from the URL.
   * @returns {string} - The generated _fbc value.
   */
  function generateFbc(fbclid) {
    const timestamp = Math.floor(Date.now() / 1000);
    return `fb.1.${timestamp}.${fbclid}`;
  }

  // === 1) Capture fbclid from the URL, store in cookie and localStorage ===
  const fbclid = getQueryParam('fbclid');
  if (fbclid) {
    console.log(`[fbclid] Found fbclid in URL: ${fbclid}`);
    setCookie('fbclid', fbclid, 30);
    window.localStorage.setItem('fbclid', fbclid);
  } else {
    console.log('[fbclid] No fbclid found in URL.');
  }

  // === 2) Load Facebook Pixel (to generate _fbp if not blocked) ===
  (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
    console.log('[Facebook Pixel] Pixel script loaded.');
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  // Initialize the Pixel
  fbq('init', FACEBOOK_PIXEL_ID);
  console.log(`[Facebook Pixel] Initialized with ID: ${FACEBOOK_PIXEL_ID}`);

  /**
   * Ensures that Pixel has set the _fbp cookie.
   * @param {function} callback - Function to call once _fbp is retrieved or timeout occurs.
   */
  function ensureFbp(callback) {
    const maxAttempts = 20; // Total wait time: 20 * 100ms = 2000ms
    let attempts = 0;
    const interval = setInterval(() => {
      const fbp = getCookie('_fbp');
      if (fbp || attempts >= maxAttempts) {
        clearInterval(interval);
        callback(fbp);
      }
      attempts++;
    }, 100); // Check every 100ms
  }

  /**
   * Ensures that _fbp and _fbc are present, generating _fbc if necessary.
   * Stores all values in localStorage.
   */
  function processFacebookData() {
    ensureFbp((fbp) => {
      if (fbp) {
        window.localStorage.setItem('fbp', fbp);
        console.log(`[fbp] Stored in localStorage: ${fbp}`);
      } else {
        console.warn('[fbp] _fbp not found.');
      }

      let fbc = getCookie('_fbc');
      if (fbclid && !fbc) {
        fbc = generateFbc(fbclid);
        setCookie('_fbc', fbc, 30);
        console.log(`[_fbc] Generated and set _fbc: ${fbc}`);
      } else if (fbc) {
        console.log(`[_fbc] Existing _fbc found: ${fbc}`);
      } else {
        console.log('[_fbc] No fbclid present; _fbc not generated.');
      }

      if (fbc) {
        window.localStorage.setItem('fbc', fbc);
        console.log(`[fbc] Stored in localStorage: ${fbc}`);
      } else {
        console.warn('[fbc] _fbc not found or not generated.');
      }

      // Final log of all Facebook data stored
      const storedData = {
        fbclid: window.localStorage.getItem('fbclid') || null,
        fbp: window.localStorage.getItem('fbp') || null,
        fbc: window.localStorage.getItem('fbc') || null
      };
      console.log('[Facebook Data] Final stored data in localStorage:', storedData);
    });
  }

  // === 3) Process Facebook Data after Pixel initialization ===
  processFacebookData();

})();