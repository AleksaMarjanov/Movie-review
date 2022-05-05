import React from "react";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  function createMovie(movie) {
    return (
      <Movie
        id={movie.id}
        key={movie.id}
        title={movie.title}
        img={movie.imgURL}
        director={movie.director}
        releasedate={movie.releaseDate}
      />
    );
  }

  return <div className="posterBG">{MovieList.map(createMovie)}</div>;
}

export default App;
