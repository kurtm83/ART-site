// Firebase Configuration
// Follow these steps to set up Firebase:
// 1. Go to https://console.firebase.google.com/
// 2. Click "Add project" (or use existing project)
// 3. Give it a name (e.g., "rhino-training-reviews")
// 4. Disable Google Analytics (optional, not needed)
// 5. Click "Create Project"
// 6. In your project, click the web icon (</>)
// 7. Register your app (give it a nickname)
// 8. Copy the firebaseConfig object and replace the one below
// 9. Go to "Build" > "Firestore Database" > "Create database"
// 10. Start in "production mode" (we'll set rules below)
// 11. Choose a location close to you
// 12. In "Rules" tab, paste these rules:

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{reviewId} {
      // Anyone can read all reviews
      allow read: if true;
      // Anyone can create reviews
      allow create: if true;
      // Only authenticated users can update/delete (for future admin panel)
      allow update, delete: if request.auth != null;
    }
  }
}
*/

// YOUR FIREBASE CONFIGURATION (Replace this with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAut7fUyBlwbiXywldCJmN9pdJ7ItmJiQ8",
  authDomain: "rhino-training-reviews.firebaseapp.com",
  projectId: "rhino-training-reviews",
  storageBucket: "rhino-training-reviews.firebasestorage.app",
  messagingSenderId: "1068175407199",
  appId: "1:1068175407199:web:4b650aa5ae2fedd36043ea"
};

// Initialize Firebase
let db;
try {
  const app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization error:', error);
  console.log('Please update firebase-config.js with your Firebase credentials');
}
