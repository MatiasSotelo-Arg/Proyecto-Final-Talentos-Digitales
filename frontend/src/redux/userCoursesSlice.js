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
    addMyCourses: (state, action) => {
      if (Array.isArray(action.payload)) {
        // Filtrar los nuevos elementos que no están en myCourses
        const newCourses = action.payload.filter(
          (course) => !state.myCourses.includes(course)
        );
        // Asignar un nuevo array combinado
        state.myCourses = [...state.myCourses, ...newCourses];
      } else {
        // Si el payload no es un array, agregarlo si no existe
        if (!state.myCourses.includes(action.payload)) {
          state.myCourses = [...state.myCourses, action.payload];
        }
      }
    },
  },
});

export const { addUser, addMyCourses } = userSlice.actions;

export default userSlice.reducer;
