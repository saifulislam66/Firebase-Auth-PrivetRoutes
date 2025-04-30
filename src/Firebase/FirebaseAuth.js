// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFQ3wweKSVWBVFxOFKkKHFpGt-yuqH-mY",
  authDomain: "register-login-learning.firebaseapp.com",
  projectId: "register-login-learning",
  storageBucket: "register-login-learning.firebasestorage.app",
  messagingSenderId: "759009061038",
  appId: "1:759009061038:web:2a9f6898a2206c4a46253f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
