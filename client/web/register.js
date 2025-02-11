// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOy3htvK0RhPvNviY4z9vuO_k5Ic6_z8",
  authDomain: "dangereye-b8c3e.firebaseapp.com",
  databaseURL: "https://dangereye-b8c3e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dangereye-b8c3e",
  storageBucket: "dangereye-b8c3e.firebasestorage.app",
  messagingSenderId: "277600759082",
  appId: "1:277600759082:web:ad0c77b6e81998e9e64253",
  measurementId: "G-TCTC9FYJNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

