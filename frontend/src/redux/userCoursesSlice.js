import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     userCourses: [
//         "675891faa0d003dff7457357",
//         "6757ada6a603d6032889a7be",
//         "675624abe7a123d1e0a73d24"
//     ]
// }

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
