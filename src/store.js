import { configureStore } from "@reduxjs/toolkit";
import favoritesSliceReducer from "./feauters/FavoritesSlice/FavoritesSlice";
import searchSliceReducer from "./feauters/SearchSlice/SearchSlice";
export const store = configureStore(
    {
        reducer: {
            movies: searchSliceReducer,
            favoriteList: favoritesSliceReducer,
        }
    })