import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider  
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpfP7FNmFi9izjx8hrxiLtsuvjiEyHISs",
    authDomain: "crwn-clothing-db-355fa.firebaseapp.com",
    projectId: "crwn-clothing-db-355fa",
    storageBucket: "crwn-clothing-db-355fa.appspot.com",
    messagingSenderId: "438111268230",
    appId: "1:438111268230:web:8779b34458c3a8ebd65007"
  };
  
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

