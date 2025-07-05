import { Link, Outlet, useNavigate } from "react-router"
import "./product.css"
import { useDispatch, useSelector } from "react-redux"


export function Product(props){
   
const {p}=props
const navigate=useNavigate()
    return(
       
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
              ID:  {p?.id}
                <br/>
          Name:  {p?.name}
          <br/>
          Category:{p?.category}
            <br/>
          Price:{p?.price}
          </div>
         <div>   <img src={"/pictures/"+p?.src} onClick={()=> navigate(`/Deatails/${p.id}`)} ></img>
         <Outlet></Outlet></div>
          
            
            </div>
       
    )
}