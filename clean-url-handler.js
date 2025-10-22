// Clean URL Handler for GitHub Pages
// Handles URLs without .html extension

(function() {
  // Check if we're on the root domain without a file extension
  const path = window.location.pathname;

  // Don't process if:
  // - Already has .html extension
  // - Is the root path (/)
  // - Has a file extension (., js, css, png, etc.)
  if (path.includes('.html') || path === '/' || /\.[^/]+$/.test(path)) {
    return;
  }

  // If path doesn't end with .html and isn't root, try to load the .html version
  if (path !== '/' && !path.endsWith('.html')) {
    // Check if the .html version exists by trying to fetch it
    const htmlPath = path.endsWith('/') ? path + 'index.html' : path + '.html';

    fetch(htmlPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // The .html version exists, redirect to it
          window.history.replaceState({}, '', path);
          // Load the HTML content
          window.location.href = htmlPath;
        } else {
          // File doesn't exist, let the normal 404 handling occur
          console.warn('Page not found:', htmlPath);
        }
      })
      .catch(err => {
        console.error('Error checking for HTML file:', err);
      });
  }
})();
