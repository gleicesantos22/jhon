// payment.js

(function() {
  // Define your shared API domain.
  const API_DOMAIN = 'https://jhon-production.up.railway.app';

  let selectedDonation = 0;
  // We'll declare this variable here, and assign its value at the bottom.
  let CREATE_PAYMENT_INTENT_URL;

  // Ensure required elements exist
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

  // Listen for donation selection custom event
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

  // For a quick check if there are any existing field errors
  function anyFieldHasError() {
    // If any .error-message has 'active', that's an error
    const activeErrors = document.querySelectorAll('.error-message.active');
    return activeErrors.length > 0;
  }

  // Show a global error below the donate button
  function showGlobalError(message) {
    globalErrorDiv.style.display = 'inline-flex';
    globalErrorDiv.classList.add('active');
    globalErrorSpan.textContent = message;
    console.error('Global error:', message);
  }

  // Clear any global error
  function clearGlobalError() {
    globalErrorDiv.style.display = 'none';
    globalErrorDiv.classList.remove('active');
    globalErrorSpan.textContent = '';
  }

  // Switch donate button to spinner (loading)
  function showLoadingState() {
    donateButton.disabled = true;
    donateButton.innerHTML = `
      <div class="loader" 
           style="border: 3px solid #f3f3f3; border-top: 3px solid #999; border-radius: 50%; width: 1.2rem; height: 1.2rem; animation: spin 1s linear infinite;">
      </div>`;
  }

  // Revert to normal donate button
  function hideLoadingState() {
    donateButton.disabled = false;
    donateButton.textContent = 'Donate now';
  }

  // Create a custom CSS spinner animation if not already added
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

  // Main click handler
  donateButton.addEventListener('click', async function() {
    try {
      clearGlobalError();

      // 1) Check if donation amount is selected
      if (selectedDonation <= 0) {
        showGlobalError('Please select a donation amount first.');
        return;
      }

      // 2) Trigger validation for required fields by dispatching blur (and change) events
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

      // Wait a tick to allow validation to run if it is asynchronous
      await new Promise(resolve => setTimeout(resolve, 200));

      // 3) Check for any field errors
      if (anyFieldHasError()) {
        showGlobalError('Please fix the form errors before continuing.');
        return;
      }

      // 4) Gather form data with extra trimming and logging
      const emailEl = document.getElementById('email-address');
      const firstNameEl = document.getElementById('first-name');
      const lastNameEl = document.getElementById('last-name');
      const cardNameEl = document.getElementById('card-name');
      const countryEl = document.getElementById('location-country');
      const postalCodeEl = document.getElementById('location-postal-code');

      if (!emailEl || !firstNameEl || !lastNameEl || !cardNameEl || !countryEl || !postalCodeEl) {
        showGlobalError('Some required form fields are missing.');
        console.error('Missing one or more required form fields.');
        return;
      }

      const email = emailEl.value.trim();
      const firstName = firstNameEl.value.trim();
      const lastName = lastNameEl.value.trim();
      const cardName = cardNameEl.value.trim();
      const country = countryEl.value.trim();
      const postalCode = postalCodeEl.value.trim();

      // 5) Show loading on the button
      showLoadingState();

      // 6) Create PaymentIntent by calling the backend
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

      // 7) Confirm the card payment with Stripe
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

        if (paymentIntent && paymentIntent.status === 'succeeded') {
          // 8) Payment successful – create a cookie with donation data
          const receiptData = {
            amount: selectedDonation,
            email,
            name: `${firstName} ${lastName}`,
            date: new Date().toString(), // Local date/time
            country // include country from the form if available
          };
          // Set donationReceipt cookie (valid for 1 hour)
          document.cookie = `donationReceipt=${encodeURIComponent(JSON.stringify(receiptData))}; path=/; max-age=3600`;

          // Prepare conversion data: add order complete URL (set to thanks.html)
          receiptData.orderCompleteUrl = window.location.origin + '/thanks.html';

          // Retrieve fbclid from cookie if available
          const fbclid = getCookie('fbclid') || '';

          // 9) Send Facebook Conversion data before redirecting, with retry logic.
          // Note: If the conversion call fails, it will retry once.
          sendFBConversion(receiptData, fbclid)
            .finally(() => {
              // 10) Redirect to thanks.html regardless of conversion success/failure.
              window.location.href = 'thanks.html';
            });
        } else {
          throw new Error('Payment failed or was not completed.');
        }
      } catch (err) {
        hideLoadingState();
        showGlobalError(`Payment error: ${err.message}`);
        console.error('Error during payment confirmation:', err);
      }
    } catch (err) {
      // This catch is for any unforeseen errors in the click handler.
      hideLoadingState();
      showGlobalError('An unexpected error occurred. Please try again.');
      console.error('Unexpected error in donation flow:', err);
    }
  });

  // ---------------------------------------------
  // Helper Functions for Cookie Management and Facebook Conversion
  // ---------------------------------------------
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

  // Function to send Facebook Conversion data with retry logic.
  function sendFBConversion(data, fbclid, attempt = 1) {
    const payload = {
      name: data.name || '',
      email: data.email || '',
      amount: data.amount || '',
      receiptId: data.receiptId || '',
      fbclid: fbclid,
      orderCompleteUrl: data.orderCompleteUrl,
      country: data.country || ''
    };

    function doConversion() {
      return fetch(API_DOMAIN + '/api/fb-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(res => {
          if (!res.ok) {
            return res.text().then(text => { throw new Error(`Server responded with ${res.status}: ${text}`); });
          }
          return res.json();
        })
        .then(result => {
          console.log("FB Conversion response:", result);
          // Mark conversion as sent in donation data and update cookie (for 7 days)
          data.fb_conversion_sent = true;
          setCookie('donationReceipt', JSON.stringify(data), 7);
          return result;
        });
    }

    let conversionPromise;
    if (!data.country) {
      conversionPromise = fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(ipData => {
          payload.country = ipData.country || '';
          data.country = payload.country;
        })
        .catch(err => {
          console.warn("IP lookup failed, proceeding without country", err);
        })
        .then(() => doConversion());
    } else {
      conversionPromise = doConversion();
    }

    return conversionPromise.catch(err => {
      if (attempt < 2) {
        console.warn(`FB Conversion attempt ${attempt} failed. Retrying...`, err);
        return sendFBConversion(data, fbclid, attempt + 1);
      } else {
        console.error(`FB Conversion attempt ${attempt} failed. Proceeding without conversion event.`, err);
        return Promise.resolve();
      }
    });
  }

  // ---------------------------------------------
  // Set the PaymentIntent creation endpoint using API_DOMAIN and slug.
  // ---------------------------------------------
  CREATE_PAYMENT_INTENT_URL = API_DOMAIN + '/create-payment-intent';

})();
