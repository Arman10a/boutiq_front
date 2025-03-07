import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export { db, messagesCollection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc };

const firebaseConfig = {
    apiKey: "AIzaSyCoG9s6GKNPXx3BtKX9LmW0OkWFx1HWIh4",
    authDomain: "boutiq-13eff.firebaseapp.com",
    projectId: "boutiq-13eff",
    storageBucket: "boutiq-13eff.firebasestorage.app",
    messagingSenderId: "906400497862",
    appId: "1:906400497862:web:4ae83a4adb843ce82697c7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messagesCollection = collection(db, "messages");




