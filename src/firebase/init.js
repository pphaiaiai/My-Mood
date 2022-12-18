// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASG-1dQivAdUK6VJnOR0dhE4EPj_4mM1k",
  authDomain: "int305fb055.firebaseapp.com",
  projectId: "int305fb055",
  storageBucket: "int305fb055.appspot.com",
  messagingSenderId: "36465233140",
  appId: "1:36465233140:web:c07e996135d56603f3a2a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init firestore service
const db = getFirestore();

export default db;