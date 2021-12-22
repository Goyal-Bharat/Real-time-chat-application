import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB4-NTATYf6MaTvs8Z6OAEnPfyCL8r7bf0",
  authDomain: "chatify-14.firebaseapp.com",
  databaseURL: "https://chatify-14-default-rtdb.firebaseio.com",
  projectId: "chatify-14",
  storageBucket: "chatify-14.appspot.com",
  messagingSenderId: "106477515317",
  appId: "1:106477515317:web:7488e4053654e78b28777c",
  measurementId: "G-084W9JHLDS",
};

const firebaseApp = firebase.initializeApp({ firebaseConfig });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebaseApp.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
