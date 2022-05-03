// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEJ1j024SDKDzBOqFMofqLwHmEqR72I1E",
  authDomain: "todo-59956.firebaseapp.com",
  projectId: "todo-59956",
  storageBucket: "todo-59956.appspot.com",
  messagingSenderId: "989709404577",
  appId: "1:989709404577:web:25ec92a052d1a9414563e0",
  measurementId: "G-XHYDY68495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;