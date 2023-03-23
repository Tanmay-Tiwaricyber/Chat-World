// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxhA37c10g-WSWoNwK-tlYvqBQTikrJd4",
  authDomain: "chat-world-62138.firebaseapp.com",
  projectId: "chat-world-62138",
  storageBucket: "chat-world-62138.appspot.com",
  messagingSenderId: "333406733595",
  appId: "1:333406733595:web:cee744c811cf2b72197fbe",
  measurementId: "G-YJ9MY4EH46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);