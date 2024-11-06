// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn5HV5T1BBU4hrYmx6tQ9PyHSI-HFIckE",
  authDomain: "chai-authenticate.firebaseapp.com",
  projectId: "chai-authenticate",
  storageBucket: "chai-authenticate.firebasestorage.app",
  messagingSenderId: "113499989683",
  appId: "1:113499989683:web:568bb7651842327860f2c6"
};

// Initialize Firebase

export const appFirebase = initializeApp(firebaseConfig);
