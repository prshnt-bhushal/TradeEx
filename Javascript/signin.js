// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaselink";
// import { store } from "../firebaselink";
// import { doc, setDoc } from "firebase/firestore";
const btn_register =document.querySelector('#btn-register');
btn_register.addEventListener('click', ()=>{
  console.log("heeeeee")
})
// function speed(){
//   console.log("heloo")
// }
// btn_register.addEventListener('click',()=>{
//   console.log("hello")
//     const email =document.querySelector('#sign-up-email');
//     const pass =document.querySelector('#sign-up-password');
//     const username =document.querySelector('#sign-up-username');
//     createUserWithEmailAndPassword(auth, email, pass)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     const user_id= userCredential.user.uid;
//     const data ={
//         email: email,
//         username: username,
//         password:pass
//     }
//     const docRef= doc(store,"user",user_id)
//     setDoc(docRef,data).then((documentRef)=>{
//         alert("user has been registered")
//     })
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(error.message)
//   });
// })