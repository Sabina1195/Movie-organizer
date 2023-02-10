import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Favorites.css";
import { remove } from "../../feauters/FavoritesSlice/FavoritesSlice";

import { Link } from "react-router-dom";
export default function Favorites() {
  const favoritesList = useSelector((store) => store.favoriteList.favoriteList);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const movies = useSelector((store) => store.favoriteList.favoriteList);
  const [id, setId] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    e.target.style.display = "none";
    setDisabled(true);
    const data = {
      title: value,
      movies: movies,
    };

    fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setId(res.id);
      });
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="favorites">
      <input
        disabled={disabled}
        onChange={handleValue}
        value={value}
        type="text"
        placeholder="Enter a name for the list"
        className="favorites__name"
      />
      <ul className="favorites__list">
        {favoritesList.map((item) => (
          <li key={item.imdbID} className="favorites__list-item">
            {item.Title}({item.Year})
            <button 
              className="delete"
              disabled={disabled}
              onClick={() => dispatch(remove(item))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {!disabled ? (
        <button
          type="button"
          className="favorites__save"
          disabled={favoritesList.length === 0 || value === ""}
          onClick={handleClick}
        >
          Save
        </button>
      ) : (
        <Link to={"/list/" + id}>Go to the list</Link>
      )}
      <br />
      <br />
    </div>
  );
}
