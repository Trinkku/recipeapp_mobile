import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, doc, addDoc, getDoc, setDoc, query, onSnapshot, database, where, getDocs, updateDoc, orderBy, arrayUnion } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDlxY0AmGm2C1S7eLnRt-sAeO-aQl1Aqd4",

    authDomain: "recipeappmobile-125ac.firebaseapp.com",
  
    projectId: "recipeappmobile-125ac",
  
    storageBucket: "recipeappmobile-125ac.appspot.com",
  
    messagingSenderId: "880401514965",
  
    appId: "1:880401514965:web:c3d02c41d0437384e87d5c",
  
    measurementId: "G-W84V1FMY9T"
  
}

  initializeApp(firebaseConfig)
  const firestore = getFirestore()

/*   const USER = 'user'
  const QUESTIONS = 'Questions'
  const SUBJECTS = 'subjects' */

  export {

  }