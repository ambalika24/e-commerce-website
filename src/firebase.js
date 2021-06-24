import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBCWiE-N63TVHAX4u2yIfkM9rcwkBemIe0",
  authDomain: "clone-40cac.firebaseapp.com",
  projectId: "clone-40cac",
  storageBucket: "clone-40cac.appspot.com",
  messagingSenderId: "867388891501",
  appId: "1:867388891501:web:ad0c753ca1d504f898fa64",
  measurementId: "G-5JRD4CC3DQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};