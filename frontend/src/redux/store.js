import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./coursesSlice";

const store = configureStore({
  reducer: {
    courses: courseSlice,
  },
});

export default store;
