// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ9W9MR8GGEjA2PVM9klGaFzwQsGzCraU",
  authDomain: "house-market-react-e3ce8.firebaseapp.com",
  projectId: "house-market-react-e3ce8",
  storageBucket: "house-market-react-e3ce8.appspot.com",
  messagingSenderId: "1072365226072",
  appId: "1:1072365226072:web:6232e41295018a230fe22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();