import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyACFiHBnelsLbNihxz3L_CVUYUldizutps",
  authDomain: "rachat-7d2f9.firebaseapp.com",
  projectId: "rachat-7d2f9",
  storageBucket: "rachat-7d2f9.appspot.com",
  messagingSenderId: "273382679101",
  appId: "1:273382679101:web:010213befe1b0cb9964054"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, updateProfile }