
import { returnAuth } from './firebasefile.js';
import { returnStore } from './firebasefile.js';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const auth = returnAuth();
const store = returnStore();
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
    updateProfile(auth.currentUser, {displayName :username}).then(()=>{
      setDoc(docRef,data).then((documentRef)=>{
        alert("user has been registered proceed to login")
        window.location.href = "/Html/signup-signin.html";
    })
    })
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