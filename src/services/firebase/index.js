import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGO0fLm7xmQbgAxYj7h31p5-a2zJ6pqMc",
  authDomain: "backendfitnessprostore.firebaseapp.com",
  projectId: "backendfitnessprostore",
  storageBucket: "backendfitnessprostore.appspot.com",
  messagingSenderId: "584175354096",
  appId: "1:584175354096:web:9709689ddadc63f8bd8235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

