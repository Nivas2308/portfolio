// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQg3unb-QX2DOm8AJhYD_8-anwhn3qUU",
  authDomain: "portfolio-857ab.firebaseapp.com",
  databaseURL: "https://portfolio-857ab-default-rtdb.firebaseio.com",
  projectId: "portfolio-857ab",
  storageBucket: "portfolio-857ab.firebasestorage.app",
  messagingSenderId: "15819357661",
  appId: "1:15819357661:web:c8fcc46dac656e88690a34",
  measurementId: "G-KJ17K2E93H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc, serverTimestamp, doc, getDoc, setDoc, updateDoc, increment, onSnapshot };
