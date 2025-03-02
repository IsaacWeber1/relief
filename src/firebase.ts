// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC89gJuKcBgBTiwFYJjAY9MW0y2O1nGfIY",
  authDomain: "relief-5ac0e.firebaseapp.com",
  projectId: "relief-5ac0e",
  storageBucket: "relief-5ac0e.firebasestorage.app",
  messagingSenderId: "564268027333",
  appId: "1:564268027333:web:47056b6066efa1de0a8fac",
  measurementId: "G-3C68CBFFLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
