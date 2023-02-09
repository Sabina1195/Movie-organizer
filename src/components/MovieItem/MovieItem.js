import React from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../../feauters/FavoritesSlice/FavoritesSlice";

import "./MovieItem.css";
export default function MovieItem(state) {
  const dispatch = useDispatch();
  //
  return (
    <article className="movie-item">
      <img
        className="movie-item__poster"
        src={state.Poster}
        alt={state.Title}
      />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {state.Title}&nbsp;({state.Year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={() => dispatch(addToList(state))}
        >
          Add to list
        </button>
      </div>
    </article>
  );
}
