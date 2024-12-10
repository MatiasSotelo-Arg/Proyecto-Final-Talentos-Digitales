import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const newItem = action.payload;
            //Verifico si el item ya existe
            const existeItem = state.cart.find(item => item._id === newItem._id);

            if(!existeItem) {
                state.cart.push(newItem);
            }
        },
        deleteItemCart: (state, action) => {
            const itemId = action.payload;

            state.cart = state.cart.filter(item => item._id !== itemId);
        },
        emptyCart: (state) => {
            state.cart = []
        }
    }
})

export const {
    addCart,
    deleteItemCart,
    emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;