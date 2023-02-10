import { createSlice } from "@reduxjs/toolkit";
export const favoritesSlice = createSlice({
    name: "favoriteList",
    initialState: {
        favoriteList: [],
    },
    reducers: {
        add: (state, action) => {
            const foundMovie = state.favoriteList.find(movie => movie.imdbID === action.payload.imdbID);
            if (!state.favoriteList.includes(foundMovie)) {
                state.favoriteList = [...state.favoriteList, action.payload]
            }

        },
        remove: (state, action) => {
            const filteredList = state.favoriteList.filter(movie => movie.imdbID !== action.payload.imdbID);
            state.favoriteList = filteredList
        },
        sendId: (state, action) => {
            state.id = action.payload
        }
    }
})
export const { add, remove } = favoritesSlice.actions
export default favoritesSlice.reducer