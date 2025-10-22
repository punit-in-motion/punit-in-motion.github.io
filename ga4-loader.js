// GA4 Loader - Dynamically loads Google Analytics 4 tracking
// Add this script to the <head> of each page

(function() {
  // Your GA4 Measurement ID
  const GA4_MEASUREMENT_ID = 'G-8RQPM90ELJ'; // Same ID as the CrewChat.ai app

  // Load gtag.js
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    'page_path': window.location.pathname,
    'send_page_view': true
  });

  // Make gtag globally available
  window.gtag = gtag;

  // Load analytics.js after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAnalytics);
  } else {
    loadAnalytics();
  }

  function loadAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'analytics.js';
    document.head.appendChild(analyticsScript);
  }
})();
