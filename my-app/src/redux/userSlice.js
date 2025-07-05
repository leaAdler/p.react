import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
    currentUser: {},
    users: [],
    ///{id:1, name: "aa",email: "la9184@gmail.com"}
    isManager:false

}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {
           
            state.users=[...state.users,action.payload]
           state.currentUser=action.payload     
        localStorage.setItem("allUsers",JSON. stringify(state.users))   },
        setCurrent:(state,action)=>{
         state.currentUser=action.payload
        },
        setIsManager:(state,action)=>{
            state.isManager=action.payload
        },
        resetUsers:(state)=>{
             state.currentUser={}
             state.isManager=false
        },
        setUsers:(state,action)=>{
            state.users=action.payload
        }
    },
})
export const {add,setIsManager,setCurrent,resetUsers,setUsers}=usersSlice.actions
export default usersSlice.reducer