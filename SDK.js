// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuf5aWG0TuSBY-53eWATkZU6DHcwM-vvI",
  authDomain: "dark-slack.firebaseapp.com",
  projectId: "dark-slack",
  storageBucket: "dark-slack.appspot.com",
  messagingSenderId: "715280364280",
  appId: "1:715280364280:web:2bb92d8646f0bb29e0810d",
  measurementId: "G-MNMN9EFVQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);