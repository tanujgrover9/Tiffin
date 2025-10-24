// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCTpM9JdDcEoxBioO3H9VCmfqcRzZaiGI",
  authDomain: "cafe-9da74.firebaseapp.com",
  projectId: "cafe-9da74",
  storageBucket: "cafe-9da74.firebasestorage.app",
  messagingSenderId: "572736746869",
  appId: "1:572736746869:web:a245d1277cffad6ddb4f3c",
  measurementId: "G-8ESHF90D99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
