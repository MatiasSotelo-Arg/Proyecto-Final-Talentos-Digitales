import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";
import userCoursesSlice from "./userCoursesSlice"
import playListSlice from "./playListSlice"

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice,
    userCourses: userCoursesSlice,
    playListCourse: playListSlice
  },
});

export default store;
