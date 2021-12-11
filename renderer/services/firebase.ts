// Import the functions you need from the SDKs you need
import { initializeApp, getApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBi0xT-wcmJwlW5LTdw5lGUwwTgjdqwqWk',
  authDomain: 'chatting-app-35460.firebaseapp.com',
  projectId: 'chatting-app-35460',
  storageBucket: 'chatting-app-35460.appspot.com',
  messagingSenderId: '772140384040',
  appId: '1:772140384040:web:4a8a69e70f8be2af5a1a1d',
  measurementId: 'G-LQ4MXPXYFT',
};

// Initialize Firebase
function creacteFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}
const app = creacteFirebaseApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);





