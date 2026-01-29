// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNW5liQDr_A-xkk44-i5cOb-LwokH2ytc",
  authDomain: "school-website-a73a4.firebaseapp.com",
  projectId: "school-website-a73a4",
  storageBucket: "school-website-a73a4.firebasestorage.app",
  messagingSenderId: "751487943084",
  appId: "1:751487943084:web:794117c7b03641512eba09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
