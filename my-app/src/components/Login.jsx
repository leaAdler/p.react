import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, resetUsers, setCurrent, setIsManager } from "../redux/userSlice"
import { useNavigate } from "react-router"
import { reset } from "../redux/salSlice"



export function Login(){
  const users=useSelector(state=> state.users?.users)  
  const dispatch=useDispatch()
  const navigate=useNavigate()
const [user,setUser]=useState({})
useEffect(()=>{
 dispatch(resetUsers())
 dispatch(reset())
},[])
function check(){
if(user.name=="מנהל"&&user.email=="1000"){
    dispatch(setIsManager(true))
    dispatch(setCurrent({name:"מנהל",email:"1000"}))
     navigate("/Home")
}
else{
   const f= users.find(x=>(x.email==user.email))
   if(f!=null){    //משתמש קיים
    if(f.name==user.name){
       dispatch(setCurrent(user))
       navigate("/Home")
    }
    else{
        alert("משתמש קיים")

    }
   }
   else{
    dispatch(add(user))
     navigate("/Home")
   }
}
}
    return(<>
   Name: <input onChange={(e)=> setUser({...user,name:e.target.value})}/>
   Email:<input onChange={(e)=> setUser({...user,email:e.target.value})}/>
   <button onClick={check} >כניסה</button>
    </>)
}