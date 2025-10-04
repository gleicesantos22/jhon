
(function() {

  // Update with your Railway URL.
  const RAILWAY_BASE_URL = 'https://fbcid-production.up.railway.app';
  // API endpoint slug remains separate for clarity.
  const RAILWAY_API_SLUG = '/api/store-fb-data';
  // Your actual Facebook Pixel ID:
  const FACEBOOK_PIXEL_ID = '1155603432794001';

  /**
   * Helper: Get a query parameter from the URL
   */
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Helper: Simple cookie setter
   */
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  // === 1) Capture fbclid from the URL and store in a cookie ===
  const fbclid = getQueryParam('fbclid');
  if (fbclid) {
    // Attempt to store fbclid in a cookie for 30 days
    setCookie('fbclid', fbclid, 30);
  }

  // === 2) Load Facebook Pixel (to generate _fbp if not blocked) ===
  (function(f,b,e,v,n,t,s){
    if(f.fbq) return;
    n = f.fbq = function(){ n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if(!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = [];
    t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  // Initialize the Pixel
  fbq('init', FACEBOOK_PIXEL_ID);

  // === 3) Manually generate _fbc if fbclid is present and we don’t already have _fbc ===
  // (A safeguard in case Pixel is blocked or slow)
  if (fbclid && document.cookie.indexOf('_fbc=') === -1) {
    const timestamp = Math.floor(Date.now() / 1000);
    const newFbc = `fb.1.${timestamp}.${fbclid}`;
    setCookie('_fbc', newFbc, 30);
  }

  // === 4) Poll for _fbp and _fbc for up to 1.5s, then send to backend ===
  const pollInterval = 300; // check every 300 ms
  const maxWait = 1500;     // total 1.5 seconds
  const startTime = Date.now();

  const pollHandle = setInterval(() => {
    // Check cookies
    const fbpCookieMatch = document.cookie.match(new RegExp('(^| )_fbp=([^;]+)'));
    const fbcCookieMatch = document.cookie.match(new RegExp('(^| )_fbc=([^;]+)'));

    const fbp = fbpCookieMatch ? decodeURIComponent(fbpCookieMatch[2]) : null;
    const fbc = fbcCookieMatch ? decodeURIComponent(fbcCookieMatch[2]) : null;

    // If we found both or we've waited long enough, send to backend
    if ((fbp && fbc) || (Date.now() - startTime >= maxWait)) {
      fetch(RAILWAY_BASE_URL + RAILWAY_API_SLUG, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important so the session cookie is used
        body: JSON.stringify({ fbclid, fbp, fbc })
      })
      .then(res => res.json())
      .then(data => {
        console.log('FB data stored in session:', data);
      })
      .catch(err => console.error('Error storing FB data:', err));

      clearInterval(pollHandle);
    }
  }, pollInterval);
})();

