import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
  },
});

export default store;
