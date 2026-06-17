// Firebase Configuration
// Replace these placeholder values with your actual Firebase project credentials
// from the Firebase Console: https://console.firebase.google.com

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// INTEGRATION STEPS:
// 1. Create a Firebase project at https://console.firebase.google.com
// 2. Enable Authentication (Email/Password provider)
// 3. Create a Firestore database
// 4. Replace the config values above with your project credentials
// 5. Uncomment the initialization code below

// import { initializeApp } from 'firebase/app';
// const app = initializeApp(firebaseConfig);
// export default app;

export default firebaseConfig;
