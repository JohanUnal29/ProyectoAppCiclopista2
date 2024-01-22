import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from "../features/counter/counterSlice.jsx"
import shopReducer from "../features/shop/ShopSlice.jsx"
import cartReducer from '../features/cart/cartSlice.jsx'
import { shopApi } from './services/shopService.jsx'
import { authApi } from './services/authService.jsx'

import authReducer from '../features/auth/authSlice.jsx'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)