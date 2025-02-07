(function() {
  // Replace the domain with your actual backend API domain.
  const apiDomain = 'https://testrip-production.up.railway.app';

  // Minimal cookie helper
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

  // Retrieve donation cookie
  const donationCookie = getCookie('donationReceipt');
  if (!donationCookie) {
    console.log("No donationReceipt cookie found, skipping FB conversion call.");
    return;
  }

  let donationData;
  try {
    donationData = JSON.parse(donationCookie);
  } catch (err) {
    console.error("Cannot parse donationReceipt cookie:", err);
    return;
  }

  // Also get fbclid from cookie if available
  const fbclid = getCookie('fbclid') || '';

  // Prevent duplicate conversion events
  if (donationData.fb_conversion_sent) {
    console.log("Conversion already sent according to cookie, skipping.");
    return;
  }

  // Auto-detect the current order complete page URL
  donationData.orderCompleteUrl = window.location.href;

  // Use ipapi to detect the country if not already set in donationData.
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(ipData => {
      // ipData.country contains the two-letter country code.
      donationData.country = donationData.country || ipData.country;
      // Save updated donationData back to the cookie (for 7 days)
      setCookie('donationReceipt', JSON.stringify(donationData), 7);
      sendConversion(donationData);
    })
    .catch(() => {
      // If IP lookup fails, proceed without country.
      sendConversion(donationData);
    });

  function sendConversion(data) {
    const payload = {
      name: data.name || '',
      email: data.email || '',
      amount: data.amount || '',
      receiptId: data.receiptId || '',
      fbclid: fbclid,
      orderCompleteUrl: data.orderCompleteUrl,
      country: data.country || ''
    };

    fetch(apiDomain + '/api/fb-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(result => {
        console.log("FB Conversion response:", result);
        // Mark conversion as sent in cookie to avoid duplicates.
        data.fb_conversion_sent = true;
        setCookie('donationReceipt', JSON.stringify(data), 7);
      })
      .catch(err => {
        console.error("Error sending FB conversion:", err);
      });
  }
})();
