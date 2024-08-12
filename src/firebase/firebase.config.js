// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwRHpVFwhHl4VHu8hSVBltSLrI8S-E7n0",
  authDomain: "fir-with-context-b9005.firebaseapp.com",
  projectId: "fir-with-context-b9005",
  storageBucket: "fir-with-context-b9005.appspot.com",
  messagingSenderId: "1046179574863",
  appId: "1:1046179574863:web:a27651d84a7aba3746263a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
