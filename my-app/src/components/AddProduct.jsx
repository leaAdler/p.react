import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addprod } from "../redux/productSlice"
import { Link, Outlet } from "react-router"



export function AddProduct(){
const products=useSelector(state=> state.products?.products)
const [prod,setProd]=useState({})
const dispatch=useDispatch()
 function  add(){
    console.log(prod?.src);
    
      dispatch(addprod(prod))
 
      alert("נוסף בהצלחה!!")

 }
 useEffect(()=>{
 localStorage.setItem("allProducts",JSON.stringify(products))
 },[products])
// const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       // שיטה 1: FileReader (ממיר לbase64)
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProd({...prod,src:e.target.result})
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }

  // טען את כל התמונות מתקיית src/images
//   const images = importAll(
//     require.context('.../pictures', false, /\.(png|jpe?g|svg|gif)$/)
//   );
    return(<>
         {/* {Object.entries(images).map(([path, image], index) => (
        <img 
          key={index}
          src={image.default || image}
          alt={path}
          style={{ width: '200px', margin: '10px' }}
        />
      ))} */}
    <input  onChange={(e)=> setProd({...prod,name:e.target.value})} placeholder="שם מוצר"/><br></br>
    <input onChange={(e)=> setProd({...prod,price:e.target.value})} placeholder="מחיר מוצר"/><br/>
    <input  onChange={(e)=> setProd({...prod,id:e.target.value})} placeholder="קוד מוצר"/><br/>
    <input  onChange={(e)=> setProd({...prod,category:e.target.value})} placeholder="קטגוריה מוצר"/><br/>
   
    <button onClick={add}>ADD</button>
    <Outlet></Outlet>
    </>)
}