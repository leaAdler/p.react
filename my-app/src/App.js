import logo from './logo.svg';
import './App.css';
import { Products } from './components/Products';
import { Routing } from './components/Routing';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from './redux/productSlice';
import { setUsers } from './redux/userSlice';
import { Link, Outlet } from 'react-router';

function App() {
      const current=useSelector(state=> state.users?.currentUser)

    const dispatch=useDispatch()
    function setAllProducts(){
        // const arr=[
        //     {id:1,name:"פרח 1",category:"פרחים",price:180,src:"flowers (1).jpg"},
        //     {id:2,name:"פרח 2",category:"פרחים",price:180,src:"flowers (2).jpg"},
        //     {id:3,name:"פרח 3",category:"פרחים",price:100,src:"flowers (3).jpg"},
        //     {id:4,name:"פרח 4",category:"פרחים",price:80,src:"flowers (4).jpg"},
        //     {id:5,name:"פרח 5",category:"פרחים",price:180,src:"flowers (5).jpg"},
        //     {id:6,name:"פרח 6",category:"פרחים",price:280,src:"flowers (6).jpg"},
        // ]
        // localStorage.setItem("allProducts",JSON.stringify(arr))
      const allproducts=JSON.parse(  localStorage.getItem("allProducts"))
      dispatch(setProducts(allproducts))
    }
     function setAllUsers(){
      
      const allusers=JSON.parse( localStorage.getItem("allUsers"))
      dispatch(setUsers(allusers))
    }
    useEffect(()=>{
    setAllProducts()
    setAllUsers()
    },[])
  return (
    <div className="App">
        <nav style={{
      display: 'flex',
      justifyContent:"center" ,
      gap: '20px',
      padding: '10px',
      backgroundColor: '#f0f0f0'
    }}>
            <Link to={"/sal"}>צפיה בסל</Link>
            <Link to={"/Home"}> מוצרים </Link>
            <Link to={"/Kesher"}>צור קשר </Link>
            <Link to={"/Login"}> {current?.name!=null ? "ליציאה": "כניסה"} </Link>
            <label>שלום ל {current?.name} </label>
        </nav>
        <Outlet/>
        <Routing/>
    {/* <Products></Products> */}
    
    </div>
  );

}
export default App;

