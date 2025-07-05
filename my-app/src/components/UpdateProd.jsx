import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  updateProd } from "../redux/productSlice"
import { Link, Outlet, useParams } from "react-router"



export function UpdateProduct(){
const products=useSelector(sate=> sate.products?.products)

const id=useParams()["newProd"]
const [prod,setProd]=useState(products.find(x=> x.id==id))
const dispatch=useDispatch()
 function update(){
   
    
      dispatch(updateProd(prod))
      alert(" מוצר עודכן בהצלחה!!")

 }
//  const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProd({...prod,src:e.target.result})
//       };
//       reader.readAsDataURL(file);
//     }
//   };

    return(<>
  
    Name:<input value={prod?.name}  onChange={(e)=> setProd({...prod,name:e.target.value})} placeholder="שם מוצר"/><br/>
   Price: <input value={prod?.price} onChange={(e)=> setProd({...prod,price:e.target.value})} placeholder="מחיר מוצר"/><br/>
     {/* <input  type="file" onChange={(e)=>handleImageChange(e)}></input> */}
    <img width={"100px"} src={"pictures/"+prod?.src}></img>
    <button onClick={update}>update</button>
    <Outlet></Outlet>
    </>)
}