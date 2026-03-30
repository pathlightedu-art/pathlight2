import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEd9OpbJlIYRW6_K8gLW-OxSlBjLYaCVs",
  authDomain: "pathlight-1fc3f.firebaseapp.com",
  projectId: "pathlight-1fc3f",
  storageBucket: "pathlight-1fc3f.firebasestorage.app",
  messagingSenderId: "785424649553",
  appId: "1:785424649553:web:43b0be7d2e47319fc79770",
  measurementId: "G-8B9BVPN3PK"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
