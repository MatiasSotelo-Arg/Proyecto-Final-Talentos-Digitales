import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice( {
    name: "comments",
    initialState: [],
    reducers: {
        addComments: (state, action) => {
            state.push(action.payload);
        }   
    }
})

export const { addComments } = commentsSlice.actions;
export default commentsSlice.reducer;