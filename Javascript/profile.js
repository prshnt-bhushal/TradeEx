import { collection, addDoc } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
import { returnStore } from './firebasefile.js';
import { returnStore_age } from './firebasefile.js';
import { returnAuth } from './firebasefile.js';


const auth =returnAuth();
const store_age =returnStore_age();
const store =returnStore();
const btn_upload =document.getElementById("btn-productUpload");
btn_upload.addEventListener('click',()=>{
    console.log('helloo my ');
    const product_name =document.getElementById('product-title');
    const product_brand =document.getElementById('product-shortDes');
    const product_details =document.getElementById('product-detailDes');
    const product_category =document.getElementById('select-category');
    const category_selected = product_category.options[product_category.selectedIndex].text;
    const selectedFile = document.getElementById('productImg').files[0];
    
    const user_id =auth.currentUser.displayName;

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
                userId:user_id
            } 
            const docRef = collection(store,'posts')
            addDoc(docRef,dataObject).then((userRef)=>{
                alert('post has been uploaded tadaa')          
            })
        })
    
    })   
})