// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhTThuzO5L5XrmahrLIu1Ynjhz6A2lapg",
  authDomain: "auth-test-1c156.firebaseapp.com",
  projectId: "auth-test-1c156",
  storageBucket: "auth-test-1c156.appspot.com",
  messagingSenderId: "149717911137",
  appId: "1:149717911137:web:5dba1b58e2edccabff4c20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
