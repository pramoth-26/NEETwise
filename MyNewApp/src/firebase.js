import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// Replace with your actual config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDd7PF64L_ytJFd7tW3BtKnQyLYP0U2_ss",
  authDomain: "fir-50767.firebaseapp.com",
  projectId: "fir-50767",
  storageBucket: "fir-50767.firebasestorage.app",
  messagingSenderId: "196881963121",
  appId: "1:196881963121:web:63e35fd05ba2addb1663d0"
};

// Google Sign-In Configuration
// NOTE: For native platforms (iOS/Android), you need to:
// 1. Create OAuth credentials for iOS and Android in Google Cloud Console
// 2. For Android: Get your SHA-1 fingerprint from: eas build --platform android --auto-commit
//    Then add the fingerprint in Google Cloud Console OAuth settings
// 3. For iOS: Add bundleIdentifier from app.json to Google Cloud Console OAuth settings

// Web OAuth Client ID
export const GOOGLE_SIGN_IN_KEY = '196881963121-oismb6gnhsmtdquvj0dsq3djomlf17l7.apps.googleusercontent.com';

// iOS OAuth Client ID - Replace with your actual iOS client ID from Google Cloud Console
export const GOOGLE_SIGN_IN_IOS_KEY = '196881963121-oismb6gnhsmtdquvj0dsq3djomlf17l7.apps.googleusercontent.com';

// Android OAuth Client ID - Replace with your actual Android client ID from Google Cloud Console
export const GOOGLE_SIGN_IN_ANDROID_KEY = '196881963121-oismb6gnhsmtdquvj0dsq3djomlf17l7.apps.googleusercontent.com';

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication
export const auth = getAuth(app);