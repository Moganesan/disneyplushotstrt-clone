import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1b1BFDPpyrPN8QuHsuLP6lPtIED8wKVM",
  authDomain: "disney-plus-clone-56f96.firebaseapp.com",
  projectId: "disney-plus-clone-56f96",
  storageBucket: "disney-plus-clone-56f96.appspot.com",
  messagingSenderId: "364061015120",
  appId: "1:364061015120:web:046e963049ddb428dfe555",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
