import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAxB1285atn-KXSIXqTKNRVwfwRej5VK7Y",
    authDomain: "followup-49d0e.firebaseapp.com",
    projectId: "followup-49d0e",
    storageBucket: "followup-49d0e.appspot.com",
    messagingSenderId: "1090396428497",
    appId: "1:1090396428497:web:276d9a595b2844a21d4df0"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function login() {
  auth.signInWithPopup(provider);
}

function logout() {
  auth.signOut();
}

export {
  auth,
  login,
  logout,
}