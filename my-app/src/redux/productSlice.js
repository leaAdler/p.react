import { createSlice, current } from '@reduxjs/toolkit'
import { setCurrent } from './userSlice'
const initialState = {
    currentProduct: {},
    products: []
}
//{id:1, name: "aa",price: 100},{id:2, name: "bb",price: 100,src:"menu_flowers.jpg"},{id:1, name: "cc",price: 100,src:"logo512.png"}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addprod: (state, action) => {
            state.products=[...state.products,action.payload]
         
        },
         delet:(state,action)=>{

         state.products=state.products.filter((x,index)=> index!=action.payload)
        let arr=[...state.products]
         localStorage.setItem("allProducts",JSON.stringify(arr))
        },
        setProducts:(state,action)=>{
                    state.products=action.payload
        },
        updateProd:(state,action)=>{
            state.products=state.products.map(x=>{ if (x.id==action.payload.id) return action.payload; else return x})
        },
         setCurrent:(state,action)=>{
                    state.currentProduct=action.payload
        },
        
    },
})
export const {addprod,delet,setProducts,updateProd}=productsSlice.actions
export default productsSlice.reducer
