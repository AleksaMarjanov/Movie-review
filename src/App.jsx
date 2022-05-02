import React from 'react';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  function createMovie(movie) {
    return <Movie
      id={movie.id}
      key={movie.id}
      title={movie.title}
      name={movie.name}
      img={movie.imgURL}
      director={movie.director}
      releaseDate={movie.releasedate}
      />
  };


  return (
    <>
     <h1>Movie List</h1>
      {MovieList.map(createMovie)}
    </>
  );
}

export default App;
