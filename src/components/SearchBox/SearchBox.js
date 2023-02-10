import React from "react";
import "./SearchBox.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../feauters/SearchSlice/SearchSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleDisableAndValue = (e) => {
    setValue(e.target.value);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetch(`https://omdbapi.com/?s=${value}&apikey=dde8cf3f`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(search(data.Search));
      });
  };

  return (
    <div className="search-box">
      <form
        action="submit"
        className="search-box__form"
        onSubmit={searchMovies}
      >
        <label htmlFor="search-input" className="search-box__form-label">
          Search movie by title:{" "}
          <input
            value={value}
            onChange={handleDisableAndValue}
            type="text"
            className="search-box__form-input"
            placeholder="E.g. Shawshank Redemption"
            id="search-input"
          />
        </label>
        <button
          type="submit"
          disabled={value.length === 0}
          className="search-box__form-submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
