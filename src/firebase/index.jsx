// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbqY9n4JHBBqiEzQsJYB27tF_giGyh5m0",
    authDomain: "anthonyhai.firebaseapp.com",
    projectId: "anthonyhai",
    storageBucket: "anthonyhai.appspot.com",
    messagingSenderId: "462913443589",
    appId: "1:462913443589:web:b4861db021351e3ad1896c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
