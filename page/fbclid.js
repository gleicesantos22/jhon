(function() {
  /**
   * getCookie / setCookie helpers
   */
  function getCookie(name) {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
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

  /**
   * 1. Check the URL for fbclid
   * 2. If found, store it in a "fbclid" cookie for up to 7 days
   */
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get('fbclid');
  if (fbclid) {
    // Store only if cookie not already set
    const existing = getCookie('fbclid');
    if (!existing) {
      setCookie('fbclid', fbclid, 7);
    }
  }
})();
