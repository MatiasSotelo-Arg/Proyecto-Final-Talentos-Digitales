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
      // Verificar si el payload es un array
      if (Array.isArray(action.payload)) {
        // Filtrar los elementos que ya existen en myCourses
        const newCourses = action.payload.filter(
          (course) => !state.myCourses.includes(course)
        );
        // Añadir los nuevos elementos a myCourses
        state.myCourses.push(...newCourses);
      } else {
        // Si no es un array, añade el elemento directamente (como fallback)
        if (!state.myCourses.includes(action.payload)) {
          state.myCourses.push(action.payload);
        }
      }
    },
  },
});

export const { addUser, addMyCourses } = userSlice.actions;

export default userSlice.reducer;
