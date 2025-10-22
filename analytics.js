// CrewChat.ai Analytics Tracking
// Google Analytics 4 tracking helper functions

/**
 * Track download button clicks
 * @param {string} platform - 'ios' or 'android'
 * @param {string} location - Where on the page the button was clicked (e.g., 'hero', 'footer', 'navbar')
 */
function trackDownload(platform, location) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download_click', {
      'platform': platform,
      'location': location,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: Download click - ${platform} from ${location}`);
  }
}

/**
 * Track blog post views
 * @param {string} postTitle - Title of the blog post
 */
function trackBlogView(postTitle) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'blog_view', {
      'post_title': postTitle,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: Blog view - ${postTitle}`);
  }
}

/**
 * Track scroll depth
 * @param {number} depth - Percentage scrolled (25, 50, 75, 100)
 */
function trackScrollDepth(depth) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'scroll_depth', {
      'depth': depth,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: Scroll depth - ${depth}%`);
  }
}

/**
 * Track feature card interactions
 * @param {string} featureName - Name of the feature clicked
 */
function trackFeatureClick(featureName) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'feature_click', {
      'feature_name': featureName,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: Feature click - ${featureName}`);
  }
}

/**
 * Track external link clicks
 * @param {string} url - URL being clicked
 * @param {string} linkText - Text of the link
 */
function trackExternalLink(url, linkText) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'external_link_click', {
      'link_url': url,
      'link_text': linkText,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: External link - ${url}`);
  }
}

/**
 * Track video plays (if you add videos)
 * @param {string} videoTitle - Title/name of the video
 */
function trackVideoPlay(videoTitle) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'video_play', {
      'video_title': videoTitle,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: Video play - ${videoTitle}`);
  }
}

// Initialize scroll depth tracking
let scrollDepthTracked = {
  25: false,
  50: false,
  75: false,
  100: false
};

window.addEventListener('scroll', function() {
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  Object.keys(scrollDepthTracked).forEach(depth => {
    if (scrollPercentage >= depth && !scrollDepthTracked[depth]) {
      scrollDepthTracked[depth] = true;
      trackScrollDepth(depth);
    }
  });
});

// Track page load time
window.addEventListener('load', function() {
  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_load', {
      'load_time_ms': loadTime,
      'page_path': window.location.pathname
    });
    console.log(`📊 Analytics: Page loaded in ${loadTime}ms`);
  }
});

// Export functions for use in HTML onclick handlers
window.trackDownload = trackDownload;
window.trackBlogView = trackBlogView;
window.trackFeatureClick = trackFeatureClick;
window.trackExternalLink = trackExternalLink;
window.trackVideoPlay = trackVideoPlay;
