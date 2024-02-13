import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    emailUser: "",
    items:[],
    total:0,
    updateAt:""
  }
}

const calculateTotal = (state) => {
  let total = 0;
  state.value.items.forEach(item => {
    total += item.price * item.quantity;
  });
  state.value.total = total;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,actions)=>{
        state.value.items.push({...actions.payload.data, quantity: actions.payload.quantity})
        console.log(state.value.items)
        calculateTotal(state)
    },
    removeItem:(state, actions) =>{
        state.value.items = state.value.items.filter(item => item.id !== actions.payload)
        calculateTotal(state)
    },
    removeAllItems:(state) => {
        state.value.items = []
        calculateTotal(state)
    },
    addEmailUser:(state, actions) => {
      state.value.emailUser = actions.payload
    }
  },
})


export const { addItem,removeItem, removeAllItems, addEmailUser} = cartSlice.actions

export default cartSlice.reducer