import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import requests from "./requests";
import "./Row.css";
//import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on a specific condition or variable
  useEffect(() => {
    //if [], run once when the row loads, and do not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

const opts = {
  height: "390",
  width: "100%",
  playerVars:{
    
  }
}

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/*several row__posters*/}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Row;
