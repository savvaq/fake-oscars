import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import MovieCardPlaceholder from '../MovieCardPlaceholder/MovieCardPlaceholder';

const MovieList = (props) => {
	return (
		<div className='movie-list'>
				{props.movies.map((movie) =>
					<MovieCard key={movie.Title} image={movie.Poster} year={movie.Year} title={movie.Title} imdbScore={movie.IMDBScore}/>
				)}
				{props.movies.length === 4 ? <MovieCardPlaceholder /> : null}
		</div>
  )
}

export default MovieList;