import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    createCourse: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

export const { getCourses, addCourse, createCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
