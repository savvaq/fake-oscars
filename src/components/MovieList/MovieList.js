import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import MovieCardPlaceholder from '../MovieCardPlaceholder/MovieCardPlaceholder';
import { motion, AnimatePresence } from "framer-motion";

const MovieList = (props) => {
	return (
		<AnimatePresence>
			<motion.div
			key="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='movie-list'>
					{props.movies.map((movie) =>
						<MovieCard key={movie.Title} image={movie.Poster} year={movie.Year} title={movie.Title} imdbScore={movie.IMDBScore} winner={movie.winner} loading={props.loading} />
					)}
					{props.movies.length === 4 ? <MovieCardPlaceholder /> : null}
			</motion.div>
		</AnimatePresence>
  )
}

export default MovieList;