
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getStorage } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
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
const auth = getAuth(app);
const store = getFirestore(app);
const store_age = getStorage(app);


export function returnApp (){
  return app;
}
export function returnAuth(){
  return auth;
}
export function returnStore(){
  return store;
}
export function returnStore_age(){
  return store_age;
}