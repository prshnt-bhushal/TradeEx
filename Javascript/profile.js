import { collection, addDoc, getDoc, onSnapshot, query, where } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
import { returnStore } from './firebasefile.js';
import { returnStore_age } from './firebasefile.js';
import { returnAuth } from './firebasefile.js';


const auth =returnAuth();
const store_age =returnStore_age();
const store =returnStore();
const user_name =auth.currentUser.displayName;
// let username_display =document.getElementById('usernameDisplay').innerText;
// username_display.innerText=user_name;
const btn_upload =document.getElementById("btn-productUpload");
btn_upload.addEventListener('click',()=>{
    console.log('helloo my ');
    const product_name =document.getElementById('product-title').value;
    const product_brand =document.getElementById('product-shortDes').value;
    const product_details =document.getElementById('product-detailDes').value;
    const product_category =document.getElementById('select-category');
    const category_selected = product_category.options[product_category.selectedIndex].text;
    const selectedFile = document.getElementById('productImg').files[0];
    const offerprice_provided=document.getElementById('offerprice-provided').value;
    const actualprice_provided=document.getElementById('actualprice-provided').value;
    
    
    const user_id =auth.currentUser.uid;

    const imgRef =ref(store_age,`images/${selectedFile.name}`);
    uploadBytes(imgRef, selectedFile).then(()=>{
        getDownloadURL(imgRef).then((url)=>{
            const imgUrl=url; 
            const dataObject = {
                name: product_name,
                brand: product_brand,
                description:product_details,
                category:category_selected,
                imageUrl:imgUrl,
                offerPrice:offerprice_provided,
                actualPrice:actualprice_provided,
                userId:user_id
            } 
            const docRef = collection(store,'post')
            addDoc(docRef,dataObject).then((userRef)=>{
                alert('post has been uploaded tadaa')          
            })
        })
    
    })   
})

function postCall(){
    const postRef  = collection(store,'post');
      const q = query(postRef, where("userId", "==", auth.currentUser.displayName));
      onSnapshot(q,(snapshot)=>{
        const pack = snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }))
        console.log('aaraha hain rukh jao');
        console.log(pack);
      })
}
postCall();
