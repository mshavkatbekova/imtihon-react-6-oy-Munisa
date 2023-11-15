import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjWVmDggb1kVE0xQiGFsmvjCbgtALwd1Y",
  authDomain: "for-movies-project.firebaseapp.com",
  projectId: "for-movies-project",
  storageBucket: "for-movies-project.appspot.com",
  messagingSenderId: "998734271505",
  appId: "1:998734271505:web:f7c947a0f6bf7ee3c70db0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
