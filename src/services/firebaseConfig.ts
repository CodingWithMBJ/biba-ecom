import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2a6bgpys3zxzPGjU-6uLnuP4xc1yTLK4",
  authDomain: "biba-s-ecom.firebaseapp.com",
  projectId: "biba-s-ecom",
  storageBucket: "biba-s-ecom.firebasestorage.app",
  messagingSenderId: "188303761458",
  appId: "1:188303761458:web:19cfd5fcbeff001de31c2b",
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
