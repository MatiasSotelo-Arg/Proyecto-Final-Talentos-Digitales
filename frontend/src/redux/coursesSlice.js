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
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },
    updateCourse: (state, action) => {
      if (!action.payload || !action.payload._id) {
        console.error("Invalid action payload");
        return;
      }

      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );

      if (index !== -1) {
        state.courses[index] = action.payload; // Actualiza el curso en el estado
      } else {
        console.warn("Course not found");
      }
    },
  },
});

export const {
  getCourses,
  addCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
