import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

export default function Movies() {
  const storeMovies = useSelector((store) => store.movies.movies);
  if (!storeMovies) {
    return null;
  }
  return (
    <ul className="movies">
      {storeMovies.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
}
