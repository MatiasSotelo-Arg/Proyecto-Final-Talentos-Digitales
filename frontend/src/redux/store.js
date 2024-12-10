import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice
  },
});

export default store;
