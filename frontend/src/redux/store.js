import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import cartSlice from "./cartSlice";

import playListSlice from "./playListSlice";
import commentsSlice from "./commentsSlice";
import userSlice from "./userCoursesSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    cart: cartSlice,
    userCourses: userCoursesSlice,
    playListCourse: playListSlice,
    comments: commentsSlice,
    user: userSlice,
    playListCourse: playListSlice,
  },
});

export default store;
