import { createSlice } from "@reduxjs/toolkit"



const playListSlice = createSlice({
    name: "playListCourse",
    initialState: [],
    reducers: {
        addPlayList: (state, action) => {
            const { coursesArray, courseId } = action.payload;
        
            // Buscar el curso por ID
            const playListFiltered = coursesArray.find((course) => course._id === courseId);
            state.push(...playListFiltered.playlist);
        }
        
        
    }
})

export const {
    addPlayList
} = playListSlice.actions;

export default playListSlice.reducer;