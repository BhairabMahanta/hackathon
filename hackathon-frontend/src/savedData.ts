// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXJFTgSI-rzzNqcTWHqyCOEzextEkwL_0",
  authDomain: "trekathon-ca1d0.firebaseapp.com",
  databaseURL:
    "https://trekathon-ca1d0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trekathon-ca1d0",
  storageBucket: "trekathon-ca1d0.firebasestorage.app",
  messagingSenderId: "1050089702100",
  appId: "1:1050089702100:web:603f280db960378275b141",
  measurementId: "G-5GN44E1F0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
