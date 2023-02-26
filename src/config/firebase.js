// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA98cZ7ctRPKRQjVc8LaK2IZJOdvflbuMk",
    authDomain: "evite-plan.firebaseapp.com",
    projectId: "evite-plan",
    storageBucket: "evite-plan.appspot.com",
    messagingSenderId: "203730044845",
    appId: "1:203730044845:web:8b512f7d85051b3d014324",
    measurementId: "G-M5JTRJNYGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };