import { useDispatch, useSelector } from "react-redux"
import { Product } from "./Product"
import { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router"
import { resetUsers } from "../redux/userSlice"
import { reset } from "../redux/salSlice"


export function Buy(){
   const sal=useSelector(state=> state.sal?.sal)
   const sum=useSelector(state=> state.sal?.sum)
const navigate=useNavigate()
const dispatch=useDispatch()
      function end(){
dispatch(resetUsers())
dispatch(reset())
alert("תודה ולהתראות נשלחה קבלה למייל ...!!!");
 navigate("/Login")
      }
    return(<>
    {
      sal.map(x=>{ return<>
      <Product p={x}></Product>
      </>})
    }
       <h3>סה"כ לתשלום: {sum}</h3>
      
       <button onClick={()=> end() }>אישור</button>
     <Outlet/>
       </>
    )
   
}