// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-TrY9DuRDgqAL0q_1dSalGza6JEGJxc0",
  authDomain: "echointerview-d1959.firebaseapp.com",
  projectId: "echointerview-d1959",
  storageBucket: "echointerview-d1959.firebasestorage.app",
  messagingSenderId: "480915116954",
  appId: "1:480915116954:web:50a2b2b4a3e17888efa023",
  measurementId: "G-XMSY0XMYWW",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
