import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
   sum:0,
    sal: []
}

export const salSlice = createSlice({
    name: 'sal',
    initialState,
    reducers: {
        add: (state, action) => {
            // action.payload == {digit:1}
            state.sum=state.sum+action.payload.price
            state.sal=[...state.sal,action.payload]
            alert("נוסף בהצלחה!!")
            console.log(state.sal);
            
        },
        delet:(state,action)=>{
        state.sum=state.sum- state.sal[action.payload].price

         state.sal=state.sal.filter((x,index)=> index!=action.payload)
        },
           reset:(state)=>{
             state.sal=[]
             state.sum=0
        }
    },
})
export const {add,delet,reset}=salSlice.actions
export default salSlice.reducer
