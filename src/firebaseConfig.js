// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqsiYBK4-V9c8zKm1ERVRD-_qiSOtXSs",
  authDomain: "yapego-31eb7.firebaseapp.com",
  projectId: "yapego-31eb7",
  storageBucket: "yapego-31eb7.firebasestorage.app",
  messagingSenderId: "600630157964",
  appId: "1:600630157964:web:eab4be25b80ada8f1c91a9", 
  measurementId: "G-61476DN93R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();