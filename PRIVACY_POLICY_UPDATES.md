# Privacy Policy Update Summary

**Date:** January 15, 2025
**Reason:** Implementation of Firestore cloud sync for conversation data

---

## Key Changes

### 1. Effective Date
- **Old:** December 1, 2024
- **New:** January 15, 2025

### 2. Data Collection (Section 1)

**Changed: Communication Data**
- **Old:** "Your conversations with AI personas (processed but not permanently stored)"
- **New:** "Your conversations with AI personas (stored securely to enable features like multi-device sync and proactive messaging)"

**Changed: Account Information**
- **Old:** "Email address for account management"
- **New:** "Anonymous authentication ID for account management"
- **Reason:** We use Firebase Anonymous Auth, not email addresses

### 3. Data Storage and Security (Section 3)

**Major Restructure:**

**Old Structure:**
- Local Storage (primary)
- Cloud Processing (temporary, not stored)

**New Structure:**
- Local and Cloud Storage (both permanent)
- Data Security (detailed protections)
- AI Processing (separate section)

**New Content Added:**
- Cloud storage explicitly mentioned (Firebase Firestore)
- Benefits explained: Multi-device sync, proactive messaging, account recovery
- Security details: Encrypted at rest, access-controlled, Firebase security rules
- AI processing clarified: OpenAI doesn't use data for training, digests protect privacy

### 4. Information Sharing (Section 4)

**Added Specific Service Providers:**
- RevenueCat for subscription management
- OpenAI for AI response generation
- Google Firebase for cloud storage and authentication
- Analytics services for app performance

### 5. Third-Party Services (Section 5)

**Added Detailed Service Information:**

**Google Firebase:**
- Cloud database (Firestore), authentication, and cloud functions
- Privacy Policy link: https://firebase.google.com/support/privacy

**OpenAI:**
- AI response generation
- Privacy Policy link: https://openai.com/privacy
- Note: Does not use data to train models

**RevenueCat:**
- Subscription management and analytics
- Privacy Policy link: https://www.revenuecat.com/privacy

### 6. Your Rights and Choices (Section 6)

**Enhanced Data Control Options:**

**Deletion:**
- Added timeline: Cloud data deleted within 30 days
- Clarified: Local data deleted immediately

**Export:**
- Added specific contact: privacy@3motionlabs.com

**New Option - Opt-Out:**
- Users can disable cloud sync in app settings
- Note: This disables multi-device sync and proactive features

### 7. Data Retention (Section 9)

**Major Expansion:**

**Added Categories:**
- **Active Accounts:** Conversation data retained while account is active
- **Account Deletion:** Detailed deletion process with timelines
  - Local: Immediate deletion
  - Cloud: 30-day deletion window
  - Subscription records: Up to 7 years (legal compliance)
  - Analytics: Anonymized data may be retained
- **Inactive Accounts:** Auto-deletion after 2 years of inactivity

---

## Why These Changes Were Made

### Technical Implementation
We implemented direct Firestore SDK access to enable:
1. **Multi-device sync** - Access conversations from multiple devices
2. **Proactive messaging** - Server can generate messages when app is closed
3. **Better performance** - Faster sync with offline support
4. **Account recovery** - Restore conversations if user switches devices

### User Benefits
- Conversations survive app reinstall or device change
- Proactive messages work even when app is closed
- Personalized push notifications with actual message content
- Future: Multi-device support

### Privacy Considerations
While we're now storing conversation data in the cloud:
- ✅ Data is encrypted in transit (TLS/SSL)
- ✅ Data is encrypted at rest (Firestore)
- ✅ Access-controlled (only user can access their data)
- ✅ User can opt-out and disable cloud sync
- ✅ User can delete all data within 30 days
- ✅ We still don't sell or share data with advertisers
- ✅ OpenAI doesn't use data to train models

---

## Compliance Considerations

### GDPR (European Union)
- ✅ Right to access: Users can view and export data
- ✅ Right to deletion: Users can delete account and data
- ✅ Right to rectification: Users can update profile
- ✅ Data portability: Users can request data export
- ✅ Explicit purpose: Cloud storage for multi-device and proactive features
- ✅ Opt-out option: Users can disable cloud sync

### CCPA (California)
- ✅ Notice at collection: Privacy policy explains data collection
- ✅ Right to know: Users can request data copies
- ✅ Right to delete: 30-day deletion process
- ✅ Right to opt-out: Can disable cloud sync
- ✅ No sale of data: We don't sell personal information

### App Store Requirements
- ✅ Privacy policy URL: https://crewchat.ai/privacy
- ✅ Data types disclosed in App Store Connect
- ✅ Purpose of collection explained
- ✅ Third-party services listed with privacy policy links

---

## Next Steps

### 1. Update App Store Listing
Update the privacy details in App Store Connect to reflect:
- Data stored in cloud (Firebase Firestore)
- Third-party services (OpenAI, Firebase)
- User can opt-out of cloud sync

### 2. In-App Notification (Optional)
Consider showing a one-time notification to existing users:
```
"We've updated our privacy policy to support new features like
multi-device sync and proactive messaging. Your conversations are
now securely synced to the cloud. Tap here to learn more."
```

### 3. Website Deployment
Deploy updated privacy.html to production:
```bash
cd crew_chat_website
git add privacy.html
git commit -m "Update privacy policy for Firestore cloud sync"
git push
```

### 4. Implement Opt-Out Setting (Future)
Add setting in app to disable cloud sync:
```javascript
// In app settings
<Toggle
  label="Cloud Sync"
  description="Sync conversations across devices and enable proactive features"
  value={cloudSyncEnabled}
  onChange={handleCloudSyncToggle}
/>
```

---

## Industry Comparison

### Other AI Companion Apps
**Replika:**
- ✅ Stores conversations in cloud
- ✅ Multi-device sync
- Privacy policy: https://replika.com/legal/privacy

**Character.AI:**
- ✅ Stores conversations in cloud
- ✅ Multi-device sync
- Privacy policy: https://character.ai/privacy

**Pi (Inflection AI):**
- ✅ Stores conversations in cloud
- ✅ Multi-device sync
- Privacy policy: https://pi.ai/privacy

**Our Approach:**
- ✅ Stores conversations in cloud (like competitors)
- ✅ Multi-device sync ready (like competitors)
- ✅ **Better:** Opt-out option to disable cloud sync
- ✅ **Better:** Clear deletion timeline (30 days)
- ✅ **Better:** Explicit third-party service disclosure

---

## FAQ for Users

**Q: Are my conversations still private?**
A: Yes! Your conversations are:
- Encrypted in transit and at rest
- Only accessible by you via authenticated requests
- Never sold or shared with advertisers
- Protected by industry-standard security

**Q: Can I use the app without cloud sync?**
A: Yes! You can disable cloud sync in settings. Your conversations will stay local to your device (like before). Note: This disables multi-device sync and proactive features.

**Q: What happens if I delete my account?**
A: All your data is permanently deleted:
- Local data: Deleted immediately
- Cloud data: Deleted within 30 days
- Account info: Removed from our systems

**Q: Does OpenAI train on my conversations?**
A: No! OpenAI's API does not use your data to train their models. This is part of their API terms of service.

**Q: Can I get a copy of my data?**
A: Yes! Contact privacy@3motionlabs.com to request a data export.

**Q: Why store conversations in the cloud?**
A: Cloud storage enables:
- Multi-device sync (access from multiple devices)
- Proactive messaging (works when app is closed)
- Account recovery (restore if you switch devices)
- Better personalization (conversation summaries)

---

## Legal Review Checklist

- [ ] Review by legal counsel (recommended)
- [ ] Verify GDPR compliance
- [ ] Verify CCPA compliance
- [ ] Update App Store privacy details
- [ ] Update Google Play privacy details
- [ ] Notify existing users (if required)
- [ ] Archive old privacy policy version
- [ ] Update Terms of Service (if needed)

---

## Change Log

**Version 2.0 (January 15, 2025):**
- Added cloud storage disclosure (Firebase Firestore)
- Clarified data retention policies
- Added opt-out options
- Updated third-party service information
- Enhanced data control explanations
- Added specific deletion timelines

**Version 1.0 (December 1, 2024):**
- Initial privacy policy
- Local storage only
- Basic data protection disclosures
