import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
	apiKey: "AIzaSyBuf5aWG0TuSBY-53eWATkZU6DHcwM-vvI",
	authDomain: "dark-slack.firebaseapp.com",
	projectId: "dark-slack",
	storageBucket: "dark-slack.appspot.com",
	messagingSenderId: "715280364280",
	appId: "1:715280364280:web:2bb92d8646f0bb29e0810d",
	measurementId: "G-MNMN9EFVQ8"
});

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export {auth,db};