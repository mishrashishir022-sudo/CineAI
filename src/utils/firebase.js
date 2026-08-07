// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWffHDhhjQrF_kCBez4wd_jRALQfDGFW8",
  authDomain: "cineai-5702f.firebaseapp.com",
  projectId: "cineai-5702f",
  storageBucket: "cineai-5702f.firebasestorage.app",
  messagingSenderId: "129881163377",
  appId: "1:129881163377:web:e98d983b4284a1e7c17dd0",
  measurementId: "G-04C2N6R4N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);