import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productSlice'
import  salSlice  from './salSlice'
import  usersSlice  from './userSlice'
export const store = configureStore({
  reducer: {
    products: productsSlice,
    sal:salSlice,
    users:usersSlice
  },
})

