import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      //Verifico si el item ya existe
      const existeItem = state.cart.find((item) => item._id === newItem._id);

      if (!existeItem) {
        state.cart.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
    deleteItemCart: (state, action) => {
      const itemId = action.payload;

      state.cart = state.cart.filter((item) => item._id !== itemId);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      state.cart = state.cart.map((item) =>
        item._id === id ? { ...item, quantity } : item
      );
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addCart, deleteItemCart, updateItemQuantity, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
