// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHiXS9Y3krSV9dzF6Rgl38Y_9rwW6MOzE",
  authDomain: "nachosiage-reactjs.firebaseapp.com",
  projectId: "nachosiage-reactjs",
  storageBucket: "nachosiage-reactjs.appspot.com",
  messagingSenderId: "532158957974",
  appId: "1:532158957974:web:32797f1f1671a6ad7af5b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);