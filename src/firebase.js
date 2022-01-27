import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfMOis9ke67TMF5jKfgNUKMCT8wiv83m0",
  authDomain: "test-3aed7.firebaseapp.com",
  projectId: "test-3aed7",
  storageBucket: "test-3aed7.appspot.com",
  messagingSenderId: "123616456522",
  appId: "1:123616456522:web:3bd5b668d9340df1ef5bb3",
  measurementId: "G-XGR28K5ELX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider();

export { auth, storage, provider };
export default db;