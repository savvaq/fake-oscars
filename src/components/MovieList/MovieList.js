import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import MovieCardPlaceholder from '../MovieCardPlaceholder/MovieCardPlaceholder';

const MovieList = () => {

  return (
    <div className='movie-list'>
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCardPlaceholder />
    </div>
  )
}

export default MovieList;