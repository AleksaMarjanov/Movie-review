import MovieList from './components/MovieList';
import Movie from './components/Movie';



function App() {

  function createMovie(movie) {
    return <Movie
      id={movie.id}
      key={movie.id}
      title={movie.title}
      name={movie.name}
      img={movie.imgURL}
      director={movie.director}
      releaseDate={movie.releaseDate}
      />
  };


  return (
    <div>
     <h1>Movie List</h1>
      {MovieList.map(createMovie)}
    </div>
  );
}

export default App;
