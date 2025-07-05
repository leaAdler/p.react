import { Route, Router, Routes } from "react-router"
import { Products } from "./Products"
import { Deatails } from "./Deatails"
import { Sal } from "./Sal"
import { Buy } from "./Buy"
import { Login } from "./Login"
import { AddProduct } from "./AddProduct"
import { UpdateProduct } from "./UpdateProd"
import { Kesher } from "./Kesher"


export const Routing=()=>{
    return<>
    <Routes>
        <Route path={"Login"} element={<Login/>}>
                              
         </Route>
          <Route path={"Home"} element={<Products/>}></Route>
          <Route path={"Deatails/:Idprod"} element={<Deatails/>}></Route>
          <Route path={"sal"} element={<Sal/>}></Route>
          <Route path={"buy"} element={<Buy/>}></Route>
          <Route path={"addProd"} element={<AddProduct/>}></Route>
          <Route path={"updateProd/:newProd"} element={<UpdateProduct/>}></Route>
        <Route path={"Kesher"} element={<Kesher/>}></Route>
    </Routes>
    </>
}