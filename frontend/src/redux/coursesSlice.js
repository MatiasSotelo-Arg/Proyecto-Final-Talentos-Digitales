import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
