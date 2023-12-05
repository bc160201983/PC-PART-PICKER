// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"; // Import 'firebase/app' for initialization
import "firebase/storage"; // Import 'firebase/storage' for Firebase Storage
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlk_EPc61P13eY126abnuwx808_1BZle8",
  authDomain: "pc-builder-42639.firebaseapp.com",
  projectId: "pc-builder-42639",
  storageBucket: "pc-builder-42639.appspot.com",
  messagingSenderId: "825226131108",
  appId: "1:825226131108:web:8adede451a4f8c2f59d831",
  measurementId: "G-743EYJ17LW",
};

// Initialize Firebase

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app); // Access Firebase Storage through the initialized app

export { storage };
