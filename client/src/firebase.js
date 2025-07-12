// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Firebase config (corrected)
const firebaseConfig = {
  apiKey: "AIzaSyDRUQ7hrVvysSOvePepHdz46wrSxRD8eBw",
  authDomain: "campus-book-exchange.firebaseapp.com",
  projectId: "campus-book-exchange",
  storageBucket: "campus-book-exchange.appspot.com",
  messagingSenderId: "691874010423",
  appId: "1:691874010423:web:9a24ac6f9a6dd6d7aaf6b2",
  measurementId: "G-0L23WVWDRE"
};

// ✅ Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Export auth to use in Register/Login
export { auth };
