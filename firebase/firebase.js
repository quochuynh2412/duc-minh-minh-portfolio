// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMXuZLs9TOPLJWK_Jlv5yCbYJToud-xms",
    authDomain: "duc-minh-minh.firebaseapp.com",
    databaseURL: "https://duc-minh-minh-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "duc-minh-minh",
    storageBucket: "duc-minh-minh.appspot.com",
    messagingSenderId: "730880233809",
    appId: "1:730880233809:web:ebaf7e5e609e11566cc370",
    measurementId: "G-MFL0QDXF5E"
};

let analytics; let db; let storage;
if (firebaseConfig?.projectId) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    if (app.name && typeof window !== 'undefined') {
        analytics = getAnalytics(app);
    }

    // Access Firebase services using shorthand notation
    db = getFirestore(app);
}

export { db, analytics };