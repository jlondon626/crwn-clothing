import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider  
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACEsrf74dG04FEcpcjumcZcv-1ti3H_Lk",
  authDomain: "crwn-clothing-db-56980.firebaseapp.com",
  projectId: "crwn-clothing-db-56980",
  storageBucket: "crwn-clothing-db-56980.appspot.com",
  messagingSenderId: "884802278629",
  appId: "1:884802278629:web:ce04f626c87315ac1ab00c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef

}


