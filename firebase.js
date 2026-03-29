// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxsbrTYNrHoj7UfsNHSUvEEz2cW5wCBKI",
  authDomain: "food-steps-168fa.firebaseapp.com",
  projectId: "food-steps-168fa",
  storageBucket: "food-steps-168fa.firebasestorage.app",
  messagingSenderId: "382084018874",
  appId: "1:382084018874:web:e2af5c6ef1e90cd057c883",
  measurementId: "G-QL7RK7QSHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);