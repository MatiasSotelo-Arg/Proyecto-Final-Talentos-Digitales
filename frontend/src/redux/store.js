import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";
import userCoursesSlice from "./userCoursesSlice"

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice,
    userCourses: userCoursesSlice,
  },
});

export default store;
