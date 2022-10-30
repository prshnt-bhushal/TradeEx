import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

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
//sign Up
const btn_register =document.getElementById('btn-register');
btn_register.addEventListener('click',()=>{
  console.log("hello")
    const email =document.getElementById('sign-up-email').value;
    const pass =document.getElementById('sign-up-password').value;
    const username =document.getElementById('sign-up-username').value;
    createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const user_id= userCredential.user.uid;
    const data ={
        email: email,
        username: username,
        password:pass
    }
    const docRef= doc(store,"user",user_id)
    setDoc(docRef,data).then((documentRef)=>{
        alert("user has been registered proceed to login")
        window.location.href = "/Html/signup-signin.html";
    })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
})

// sign in

const btn_login =document.getElementById('btn-login');
btn_login.addEventListener('click',()=>{
  console.log("hello")
    const email$ =document.getElementById('sign-in-email').value;
    const pass$ =document.getElementById('sign-in-password').value;
    signInWithEmailAndPassword(auth, email$, pass$)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("welcome To TradeEx")
    window.location.href = "/Html/Market.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
})

export default app;