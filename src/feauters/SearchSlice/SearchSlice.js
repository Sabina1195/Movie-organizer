import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: "moviesList",
    initialState: {
        movies: []
    },
    reducers: {
        search: (state, action) => {
            state.movies = action.payload;
        }
    }
})

export const { search } = searchSlice.actions;
export default searchSlice.reducer;