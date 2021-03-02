import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCzk50z63UkWyUnkZFnEw4XmPWrWMurxuQ",
    authDomain: "cardiomyopathy-ba686.firebaseapp.com",
    projectId: "cardiomyopathy-ba686",
    storageBucket: "cardiomyopathy-ba686.appspot.com",
    messagingSenderId: "287154487963",
    appId: "1:287154487963:web:1ae5b7b5a7aecd74cdfc3e"
  };
firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {firebaseAuthentication, firebaseFireStore, timestamp};
