import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userCourses: [
        "675891faa0d003dff7457357",
        "6757ada6a603d6032889a7be",
        "675624abe7a123d1e0a73d24"
    ]
}


const userCoursesSlice = createSlice({
    name: "userCourses",
    initialState,
    reducers: {
        addUserCourses: (action) => {
            state.userCourses = action.payload;
        }
    }
})

export const {
    addUserCourses
} = userCoursesSlice.actions;

export default userCoursesSlice.reducer;