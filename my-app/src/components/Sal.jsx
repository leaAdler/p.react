import { useSelector,useDispatch } from "react-redux" 
import { Product } from "./Product"
import { delet}from '../redux/salSlice'
import { Link, Outlet } from "react-router"
export function Sal (){
    const sal=useSelector(state => state.sal?.sal)
    const sum=useSelector(state => state.sal?.sum)
    const current=useSelector(state=> state.users?.currentUser)

    const dispatch=useDispatch()
    function del(i){
     dispatch(delet(i))
     
    }
    return(
        <>
        {
           current.name!=null && sal.map((pr,index)=> {return <div>
            <Product p={pr}></Product>
            <button onClick={()=>del(index)}>הסר מהסל</button>
            </div>})
          
        
        } 
         {"לתשלום:  "+sum}
         <br/>
         <Link to={"/buy"}>לתשלום</Link>
         <Outlet></Outlet>
        </>
    )
}