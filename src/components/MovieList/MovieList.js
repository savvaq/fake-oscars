import { useEffect, useState } from 'react';
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import MovieCardPlaceholder from '../MovieCardPlaceholder/MovieCardPlaceholder';

const MovieList = (props) => {
	return (
	<div className='movie-list'>
			{props.movies.map((movie) =>
				<MovieCard key={movie.Title} image={movie.Poster} year={movie.Year} title={movie.Title} />
			)}
			{props.placeholder.length < 1 ? <MovieCardPlaceholder /> : <MovieCard image={props.placeholder[0].Poster} year={props.placeholder[0].Year} title={props.placeholder[0].Title} />}
	</div>
  )
}

export default MovieList;