import firebase from "firebase";

const firebaseConfig = {
  apiKey: "************************************",
  authDomain: "*****************************",
  projectId: "************************88",
  storageBucket: "8********************************8",
  messagingSenderId: "88888888888",
  appId: "1:364061015120:web:8******8888888888888888",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
