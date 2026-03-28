



import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-8ee71.firebaseapp.com",
  projectId: "interviewiq-8ee71",
  storageBucket: "interviewiq-8ee71.firebasestorage.app",
  messagingSenderId: "996660480998",
  appId: "1:996660480998:web:a140900c10f30c2c97a427"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider}