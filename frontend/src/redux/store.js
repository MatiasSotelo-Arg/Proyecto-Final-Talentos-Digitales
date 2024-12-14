import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userCoursesSlice";
import playListSlice from "./playListSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice,
    user: userSlice,
    playListCourse: playListSlice,
  },
});

export default store;
