// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_LBlpSOIsWwPzxNDbPgYn8dzL2KT0VXg",
  authDomain: "fastfeast-634eb.firebaseapp.com",
  projectId: "fastfeast-634eb",
  storageBucket: "fastfeast-634eb.firebasestorage.app",
  messagingSenderId: "448662476988",
  appId: "1:448662476988:web:6f5aa7d54d6656684298b9",
  measurementId: "G-ZLLXK2MQ71",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
