import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice.jsx"
import shopReducer from "../features/shop/ShopSlice.jsx"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop:shopReducer
    },
})