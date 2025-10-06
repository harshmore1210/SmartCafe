import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail,onAuthStateChanged, signOut,}from "firebase/auth";
import {  getStorage } from "firebase/storage";
import {getFirestore,query,getDocs,collection,where,addDoc,} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-enUk86_DhcYpH7fCs8JJ9JKVTVY-ra0",
    authDomain: "smart-cafe-90203.firebaseapp.com",
    projectId: "smart-cafe-90203",
    storageBucket: "smart-cafe-90203.appspot.com",
    messagingSenderId: "1076036983297",
    appId: "1:1076036983297:web:83b4a5967fc6b3ecde7e00",
    measurementId: "G-HHYWJMHEWL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};


//Custom Hook
const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => { setCurrentUser(user)});

    return unsub;
  }, []);
  return currentUser;
};


export {
  auth,
  db,
  storage,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  useAuth
};
export default app;