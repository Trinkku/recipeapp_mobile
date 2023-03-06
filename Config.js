import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, doc, addDoc, getDoc, setDoc, query, onSnapshot, database, where, getDocs, updateDoc, orderBy, arrayUnion } from 'firebase/firestore'

const firebaseConfig = {
 

};


  initializeApp(firebaseConfig)
  const firestore = getFirestore()

  const USER = 'user'
  

  export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    firestore,
    database,
    collection,
    doc,
    addDoc,
    getDoc,
    setDoc,
    USER,
    getDocs,
    updateDoc,
  }