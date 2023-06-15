// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAczfJlszNPqJdi_FeAQ_djAk_W7HCRdks",
    authDomain: "julie-store.firebaseapp.com",
    projectId: "julie-store",
    storageBucket: "julie-store.appspot.com",
    messagingSenderId: "650958042176",
    appId: "1:650958042176:web:28f3eb92951930e3ca5ba5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs };
