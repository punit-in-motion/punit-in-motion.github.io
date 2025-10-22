# Google Analytics 4 Setup for CrewChat.ai Website

## Quick Start

All pages are already configured with GA4 tracking! You just need to update your Measurement ID in ONE file.

### Update Your Measurement ID

1. Open `ga4-loader.js`
2. Find line 5: `const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';`
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Save the file
5. Deploy to your website

**Example:**
```javascript
// Before:
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// After (using your actual ID):
const GA4_MEASUREMENT_ID = 'G-8RQPM90ELJ';
```

That's it! All pages will automatically start tracking.

## Get Your Measurement ID

### Option 1: Use Your Existing App ID (Recommended)
Based on your Firebase config, you're already using: `G-8RQPM90ELJ`

You can use the same ID for both app and website to:
- See combined analytics in one dashboard
- Easier management
- Track user journey across app and website

### Option 2: Create a New Web Property
If you want separate tracking for the website:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click Admin → Create Property
3. Name it "CrewChat.ai Website"
4. Add a Web data stream
5. Copy the new Measurement ID (format: G-XXXXXXXXXX)
6. Update `ga4-loader.js` with this new ID

## What's Being Tracked

### Automatic Events (GA4 Built-in):
- Page views
- Scrolls
- Outbound clicks
- File downloads

### Custom Events (via analytics.js):
1. **Download Clicks**
   - Event: `download_click`
   - Tracks iOS/Android app download button clicks
   - Parameters: platform, location (hero/footer), page_path

2. **Scroll Depth**
   - Event: `scroll_depth`
   - Tracks when users scroll 25%, 50%, 75%, 100% of page
   - Parameters: depth, page_path

3. **Blog Views**
   - Event: `blog_view`
   - Tracks which blog posts are viewed
   - Parameters: post_title, page_path

4. **Feature Clicks**
   - Event: `feature_click`
   - Tracks which features users click on
   - Parameters: feature_name, page_path

5. **Page Load Performance**
   - Event: `page_load`
   - Tracks how fast pages load
   - Parameters: load_time_ms, page_path

## Files Structure

```
crew_chat_website/
├── ga4-loader.js          ← UPDATE YOUR MEASUREMENT ID HERE
├── analytics.js           ← Custom event tracking functions
├── index.html             ← Has <script src="ga4-loader.js"></script>
├── blog.html              ← Has <script src="ga4-loader.js"></script>
├── blog-*.html            ← All have GA4 tracking
├── privacy.html           ← Has GA4 tracking
└── README_ANALYTICS.md    ← This file
```

## Adding GA4 to New Pages

When you create a new HTML page, just add this single line before `</head>`:

```html
    <!-- Google Analytics 4 - Single line to add to all pages -->
    <script src="ga4-loader.js"></script>
</head>
```

That's it! The new page will automatically inherit all GA4 tracking.

## Testing Your Setup

### Method 1: Browser Console
1. Open your website in Chrome
2. Press F12 to open DevTools
3. Go to Console tab
4. You should see: `📊 Analytics: Page loaded in XXXms`
5. Scroll down the page to see: `📊 Analytics: Scroll depth - 25%`

### Method 2: Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by "collect" or "gtag"
4. Refresh the page
5. You should see requests to `www.google-analytics.com`

### Method 3: GA4 Realtime Reports
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Go to Reports → Realtime
4. Open your website in another tab
5. Your visit should appear within seconds

### Method 4: GA Debugger Extension
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)
2. Enable the extension
3. Open DevTools Console
4. Visit your website
5. See detailed GA debug info

## Troubleshooting

### Not Seeing Any Data?
- Check that you updated `G-XXXXXXXXXX` in `ga4-loader.js`
- Open browser console - look for console.log messages starting with "📊"
- Check Network tab for requests to google-analytics.com
- Try disabling ad blockers
- Wait 24-48 hours for data to appear in some reports (Realtime should work immediately)

### Events Not Tracking?
- Check browser console for errors
- Verify `analytics.js` is loading (check Network tab)
- Make sure download buttons have `onclick="trackDownload(...)"` attribute

### Console Errors About gtag?
- Make sure `ga4-loader.js` is loading before any tracking calls
- Check that the script path is correct (relative to the HTML file)

## Viewing Your Data

### In Google Analytics:
1. **Realtime Report**: See current visitors and their activity
2. **Events Report**: Reports → Engagement → Events
3. **Page Views**: Reports → Engagement → Pages and screens
4. **Traffic Sources**: Reports → Acquisition → Traffic acquisition

### Custom Reports:
Create custom explorations to analyze:
- Download button conversion rates by location
- Most popular blog posts
- User engagement (scroll depth, time on page)
- Page load performance by page

## Privacy & Compliance

Your privacy policy (`privacy.html`) already mentions analytics tracking. Make sure to:
- Keep the privacy policy updated
- Consider adding a cookie consent banner if required by your jurisdiction
- Review GA4's data retention settings (Admin → Data Settings → Data Retention)

## Next Steps

1. ✅ Update `ga4-loader.js` with your Measurement ID
2. ✅ Test with Realtime reports
3. 📊 Set up custom dashboards in GA4
4. 🎯 Configure conversions for app downloads
5. 📧 Set up automated email reports
6. 🔗 Link to Google Search Console for SEO data
7. 💰 Connect to Google Ads (if running campaigns)

## Support

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Events Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Custom Events](https://support.google.com/analytics/answer/12229021)
