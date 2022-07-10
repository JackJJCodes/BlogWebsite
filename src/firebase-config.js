// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmL7DnPf_b49ekSdAH3t5VYpbjtTT6AC0",
  authDomain: "blogjj-f716c.firebaseapp.com",
  projectId: "blogjj-f716c",
  storageBucket: "blogjj-f716c.appspot.com",
  messagingSenderId: "449956540988",
  appId: "1:449956540988:web:36801fb66f64d6b0b70939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initializing all the connections required for FireBase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();