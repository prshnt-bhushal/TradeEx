// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkhqLVV1-YjUWLOx76M0zZ7ZYfBQFyglk",
  authDomain: "trade-exchange-2022.firebaseapp.com",
  projectId: "trade-exchange-2022",
  storageBucket: "trade-exchange-2022.appspot.com",
  messagingSenderId: "291602088991",
  appId: "1:291602088991:web:544e47f4008e4bf2de412a",
  measurementId: "G-BXNN9K3MWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);