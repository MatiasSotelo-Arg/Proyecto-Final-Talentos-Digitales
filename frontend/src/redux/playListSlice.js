import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    playListCourse: [],
    selectedPlaylist: null,
}

const playListSlice = createSlice({
    name: "playListCourse",
    initialState,
    reducers: {
        addPlayList: (state, action) => {
            const { coursesArray, courseId } = action.payload;
        
            // Buscar el curso por ID
            const playListFiltered = coursesArray.find((course) => course._id === courseId);
            state.playListCourse.push(...playListFiltered.playlist);
        },
        addSelectedPlaylist: (state, action) => {
            state.selectedPlaylist = action.payload;
        }   
        
    }
})

export const {
    addPlayList,
    addSelectedPlaylist
} = playListSlice.actions;

export default playListSlice.reducer;