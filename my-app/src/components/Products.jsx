import { useSelector,useDispatch } from "react-redux" 
import { Product } from "./Product"
import {add}from '../redux/salSlice'
import { Outlet, useNavigate } from "react-router"
import { delet } from "../redux/productSlice"
export function Products (){
    const allProducts=useSelector(state => state.products?.products)
          const current=useSelector(state=> state.users?.currentUser)

    const dispatch=useDispatch()
    const navigate=useNavigate()
    function addd(item){
        if( current.name!=null)
          dispatch(add(item))
         else alert("אינך מחובר, יש להירשם!!!")
    }
     const ismaneger=useSelector(state=> state.users.isManager)
  function dell(i){
  dispatch(delet(i))
}
    return(
        <>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"25px"}}>

       
        {
           allProducts?.map((pr,index)=> {return <div style={{border:"2px black solid"}} >
            <Product p={pr}></Product>
           <button onClick={()=>addd(pr)}>הוספה לסל</button>
           { ismaneger&&<button onClick={()=>dell(index)}>מחיקה</button>}
           { ismaneger&&<button onClick={()=>navigate("/updateProd/"+pr.id)}>עדכון</button>}
         
            </div>})
        }  </div>
         { ismaneger&&<button onClick={()=>navigate("/addProd")}>הוספת מוצר חדש</button>}
         <Outlet></Outlet>
        </>
    )
}