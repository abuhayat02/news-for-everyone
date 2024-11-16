
// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDEFiq39nKt27043poGyIVqJotH5nxsWd0",
  authDomain: "the-dragon-news-fe95b.firebaseapp.com",
  projectId: "the-dragon-news-fe95b",
  storageBucket: "the-dragon-news-fe95b.firebasestorage.app",
  messagingSenderId: "670135924227",
  appId: "1:670135924227:web:dbb95b21e86ce5d6388036",
  measurementId: "G-6LWQDWDJL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let auth = getAuth(app);
export default auth ;
