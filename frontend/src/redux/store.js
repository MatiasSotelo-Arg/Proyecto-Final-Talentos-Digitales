import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";
import userCoursesSlice from "./userCoursesSlice"
import playListSlice from "./playListSlice"
import commentsSlice from "./commentsSlice"

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice,
    userCourses: userCoursesSlice,
    playListCourse: playListSlice,
    comments: commentsSlice
  },
});

export default store;
