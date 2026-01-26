# Firebase Setup Instructions for Reviews System

## Step-by-Step Setup (5 minutes)

### 1. Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click **"Add project"** (or sign in with Google if needed)
3. Enter project name: `rhino-training-reviews` (or any name you prefer)
4. Disable Google Analytics (optional - not needed for this)
5. Click **"Create Project"**
6. Wait for project to be created, then click **"Continue"**

### 2. Register Your Web App
1. On the project homepage, click the **Web icon** (`</>`)
2. Register app nickname: `Rhino Training Website`
3. **Do NOT** check "Firebase Hosting" (you already have hosting)
4. Click **"Register app"**
5. You'll see a `firebaseConfig` object - **COPY THIS**
6. Click **"Continue to console"**

### 3. Update firebase-config.js
1. Open `firebase-config.js` in your code editor
2. Find the `firebaseConfig` object (around line 36)
3. Replace it with YOUR config from step 2
4. Save the file

**Example of what to replace:**
```javascript
// Replace this:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... etc
};

// With your actual config from Firebase Console:
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "rhino-training-reviews.firebaseapp.com",
  projectId: "rhino-training-reviews",
  // ... etc (use YOUR values)
};
```

### 4. Create Firestore Database
1. In Firebase Console, click **"Build"** in left sidebar
2. Click **"Firestore Database"**
3. Click **"Create database"**
4. Select **"Start in production mode"** (we'll set rules next)
5. Choose a location close to you (e.g., `us-central` for USA)
6. Click **"Enable"**

### 5. Set Firestore Security Rules
1. Click the **"Rules"** tab at the top
2. Replace ALL the text with this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{reviewId} {
      allow read: if resource.data.approved == true;
      allow create: if request.auth == null;
      allow update, delete: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

### 6. Test It!
1. Open your website locally or upload to your server
2. Go to `submit-review.html`
3. Submit a test review
4. Check Firebase Console > Firestore Database > Data tab
5. You should see a new `reviews` collection with your test review!
6. Go to your main page - the review should appear in the carousel!

## Troubleshooting

**"Firebase not defined" error:**
- Make sure you updated `firebase-config.js` with your actual credentials
- Check that the file is saved properly

**Reviews not showing:**
- Open browser console (F12) and check for errors
- Make sure Firestore rules are published
- Verify your API key is correct in firebase-config.js

**Still having issues?**
- Check the browser console for specific error messages
- Make sure you completed all steps above
- Firebase Console > Firestore > Data tab should show your reviews

## Cost
✅ **FREE** for your use case
- Free tier includes 50K reads/day (way more than you need)
- 20K writes/day (plenty for reviews)
- 1GB storage (reviews are tiny text files)

---

That's it! Your reviews are now stored in the cloud and visible to everyone! 🎉
