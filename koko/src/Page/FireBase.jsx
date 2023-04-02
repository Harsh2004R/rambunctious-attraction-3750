// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYavbf5nsPJl-yNP1kGTN4-lhkUTaPkig",
  authDomain: "ukiyo-a97c0.firebaseapp.com",
  projectId: "ukiyo-a97c0",
  storageBucket: "ukiyo-a97c0.appspot.com",
  messagingSenderId: "943248904686",
  appId: "1:943248904686:web:c48cafa7718125d14b7eff"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);