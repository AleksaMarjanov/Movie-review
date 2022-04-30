import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Review from './components/Review';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm'
import Stars from './components/Stars';



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
      <ReviewForm />
      <Stars />
      <ReviewList />
      <Review />
    </div>
  );
}

export default App;
