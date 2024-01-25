import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "landing-12fc4.firebaseapp.com",
  projectId: "landing-12fc4",
  storageBucket: "landing-12fc4.appspot.com",
  messagingSenderId: "471632473838",
  appId: "1:471632473838:web:24f7bfd6df9ed22da84dff"
};

const app = initializeApp(firebaseConfig);