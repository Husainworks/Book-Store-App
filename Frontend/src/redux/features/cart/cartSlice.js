import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                alert("Item added Successfully!")
            }else{
                alert("Item already exists in the cart!")
            }
        }
    },
})

export const {} = cartSlice.actions;
export default cartSlice.reducer
