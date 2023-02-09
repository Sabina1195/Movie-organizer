import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListPage.css";
export default function ListPage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const linktoIMDB = "https://www.imdb.com/title/";
  const [listName, setListName] = useState("");
  useEffect(() => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListName(data.title.toUpperCase());
        setMovies(data.movies);
      });
  }, [id]);

  return (
    <div className="list-page">
      <h1 className="list-page__title">{listName}</h1>
      {
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.imdbID}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={linktoIMDB + item.imdbID}
                >
                  {item.Title}({item.Year})
                </a>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
