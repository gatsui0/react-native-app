import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD6IPKQ9tDD1FioiIGh8HIw6HPTSHAcZTE",
    authDomain: "flashcardsapp-1ee16.firebaseapp.com",
    projectId: "flashcardsapp-1ee16",
    storageBucket: "flashcardsapp-1ee16.appspot.com",
    messagingSenderId: "31381622835",
    appId: "1:31381622835:web:31596d19b9e495cc46d346",
    measurementId: "G-FR3Y3407SS"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage(app);
//login, main,