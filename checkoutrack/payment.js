/**********************************************
 * CONFIGURATION KEYS
 **********************************************/
const API_DOMAIN = 'https://fbcid-production.up.railway.app';
const FACEBOOK_PIXEL_ID = '1155603432794001'; // Replace with your actual Facebook Pixel ID

/**********************************************
 * FACEBOOK PIXEL BASE CODE & Helpers
 **********************************************/
!function(f,b,e,v,n,t,s){
  if(f.fbq)return;
  n = f.fbq = function(){
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if(!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', FACEBOOK_PIXEL_ID); // Initialize with our key

// Wait for fbq to be ready before firing events.
function onFbqReady(callback) {
  if (window.fbq && window.fbq.loaded) {
    callback();
  } else {
    setTimeout(function() { onFbqReady(callback); }, 50);
  }
}

onFbqReady(function() {
  // Fire basic events right away
  fbq('track', 'PageView');
  fbq('track', 'InitiateCheckout', {
    content_name: 'Donation Order',
    content_category: 'Donation',
    currency: 'USD'
  });
});

/**********************************************
 * Helper Functions: getCookie, setCookie
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
 * PAYMENT CODE
 **********************************************/
(function() {
  // Local variables and endpoint URL.
  let selectedDonation = 0;
  const CREATE_PAYMENT_INTENT_URL = API_DOMAIN + '/create-payment-intent';

  // DOM elements
  const donateButton = document.getElementById('donate-now');
  const globalErrorDiv = document.getElementById('donation-form-error');
  if (!donateButton || !globalErrorDiv) {
    console.error('Required DOM elements not found.');
    return;
  }
  const globalErrorSpan = globalErrorDiv.querySelector('span');
  if (!globalErrorSpan) {
    console.error('Global error span element not found.');
    return;
  }

  // Listen for donation selection custom event.
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

  // Quick check for any existing field errors.
  function anyFieldHasError() {
    const activeErrors = document.querySelectorAll('.error-message.active');
    return activeErrors.length > 0;
  }

  // Show a global error message.
  function showGlobalError(message) {
    globalErrorDiv.style.display = 'inline-flex';
    globalErrorDiv.classList.add('active');
    globalErrorSpan.textContent = message;
    console.error('Global error:', message);
  }

  // Clear any global error message.
  function clearGlobalError() {
    globalErrorDiv.style.display = 'none';
    globalErrorDiv.classList.remove('active');
    globalErrorSpan.textContent = '';
  }

  // Switch donate button to loading spinner.
  function showLoadingState() {
    donateButton.disabled = true;
    donateButton.innerHTML =
      `<div class="loader"
         style="border: 3px solid #f3f3f3; border-top: 3px solid #999; border-radius: 50%; width: 1.2rem; height: 1.2rem; animation: spin 1s linear infinite;">
       </div>`;
  }

  // Revert donate button to normal state.
  function hideLoadingState() {
    donateButton.disabled = false;
    donateButton.textContent = 'Donate now';
  }

  // Create spinner CSS if not already added.
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

  // Conversions API request function with retry
  async function sendFBConversion(payload, attempt = 1) {
    try {
      let response = await fetch(API_DOMAIN + '/api/fb-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      // Retry once if it fails
      if (attempt < 2) {
        setTimeout(() => sendFBConversion(payload, attempt + 1), 1000);
      }
    }
  }

  // Main click handler.
  donateButton.addEventListener('click', async function() {
    try {
      clearGlobalError();

      // 1) Check that a donation amount has been selected.
      if (selectedDonation <= 0) {
        showGlobalError('Please select a donation amount first.');
        return;
      }

      // 2) Trigger validation by dispatching blur (and change) events.
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
        if (el) {
          el.dispatchEvent(new Event('blur', { bubbles: true }));
        } else {
          console.warn(`Element with id "${id}" not found during blur event dispatch.`);
        }
      });

      const countrySelect = document.getElementById('location-country');
      if (countrySelect) {
        countrySelect.dispatchEvent(new Event('change', { bubbles: true }));
      }

      // Wait a short time to allow asynchronous validation.
      await new Promise(resolve => setTimeout(resolve, 200));

      // 3) Check for any field errors.
      if (anyFieldHasError()) {
        showGlobalError('Please fix the form errors before continuing.');
        return;
      }

      // 4) Gather form data.
      const emailEl      = document.getElementById('email-address');
      const firstNameEl  = document.getElementById('first-name');
      const lastNameEl   = document.getElementById('last-name');
      const cardNameEl   = document.getElementById('card-name');
      const countryEl    = document.getElementById('location-country');
      const postalCodeEl = document.getElementById('location-postal-code');

      if (!emailEl || !firstNameEl || !lastNameEl || !cardNameEl || !countryEl || !postalCodeEl) {
        showGlobalError('Some required form fields are missing.');
        console.error('Missing one or more required form fields.');
        return;
      }

      const email      = emailEl.value.trim();
      const firstName  = firstNameEl.value.trim();
      const lastName   = lastNameEl.value.trim();
      const cardName   = cardNameEl.value.trim();
      const country    = countryEl.value.trim();
      const postalCode = postalCodeEl.value.trim();

      // 5) Show the loading spinner.
      showLoadingState();

      // 6) Create a PaymentIntent by calling the backend.
      let clientSecret;
      try {
        const response = await fetch(CREATE_PAYMENT_INTENT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            donationAmount: selectedDonation,
            email,
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
        console.error('Error creating PaymentIntent:', err);
        return;
      }

      // 7) Confirm the card payment with Stripe.
      if (!window.stripe || !window.cardNumberElement) {
        hideLoadingState();
        const errorMsg = 'Payment processing components are not available.';
        showGlobalError(errorMsg);
        console.error(errorMsg);
        return;
      }

      try {
        const { paymentIntent, error } = await window.stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: window.cardNumberElement,
            billing_details: {
              name: cardName,
              email: email,
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

        // ======= HANDLE SUCCESSFUL PAYMENT =======
        if (paymentIntent && paymentIntent.status === 'succeeded') {
          // (a) Generate a unique event_id for deduplication
          const eventId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

          // (b) Grab or generate the FB click ID (fbclid), fbp, fbc
          function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
          }

          let fbclid = getQueryParam('fbclid') || getCookie('fbclid') || '';
          let fbp    = getCookie('_fbp') || '';
          let fbc    = '';

          // If we have fbclid, build the "fbc" format: fb.1.<timestamp>.<fbclid>
          if (fbclid) {
            fbc = `fb.1.${Date.now()}.${fbclid}`;
            setCookie('fbc', fbc, 90); // store 90 days
          }
          if (fbp) {
            setCookie('fbp', fbp, 90); // refresh cookie
          }

          // (c) Store receipt data in a cookie (e.g. 1 hour)
          const receiptData = {
            amount: selectedDonation,
            email,
            name: `${firstName} ${lastName}`,
            date: new Date().toISOString(),
            country,
            event_id: eventId, // used for dedup
            fbp,
            fbc
          };
          setCookie('donationReceipt', JSON.stringify(receiptData), 1);

          // (d) Fire Facebook Pixel Purchase event from the browser (check if fbq is defined)
          if (typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', {
              value: selectedDonation,
              currency: 'USD',
              content_name: 'Donation',
              event_id: eventId,  // used for deduplication
              user_data: {
                em: email,
                fn: firstName,
                ln: lastName,
                zp: postalCode,
                country: country
              },
              custom_data: {
                fbp: fbp,
                fbc: fbc,
                fbclid: fbclid
              }
            });
          }

          // (e) Send the same event to your Conversions API endpoint (with retry)
          const capiPayload = {
            event_name: 'Purchase',
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            email: email,
            amount: selectedDonation,
            fbp: fbp,
            fbc: fbc,
            fbclid: fbclid,
            user_data: {
              em: email,
              fn: firstName,
              ln: lastName,
              zp: postalCode,
              country: country
            },
            // >>> THIS IS THE ONLY CHANGE: pass current page URL <<<
            orderCompleteUrl: window.location.href
          };
          sendFBConversion(capiPayload);

          // (f) Redirect after a short delay (ensures data is sent)
          setTimeout(() => {
            window.location.href = 'thanks.html';
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
