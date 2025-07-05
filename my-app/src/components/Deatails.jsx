import { useSelector } from "react-redux"
import { useParams } from "react-router"

export function Deatails(){
const products=useSelector(sate=> sate.products?.products)
const id=useParams()["Idprod"]


const p=products.find(x=> x.id==id)
    return(
        <>
            <div>
                {p.name}
                <br/>
                {p.price}
                <br/>
                {p.category}
          
            </div>
        </>
    )
}