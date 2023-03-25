import { useEffect, useState } from 'react';
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';
import MovieCardPlaceholder from '../MovieCardPlaceholder/MovieCardPlaceholder';
import Search from '../Search/Search';

const GetMovie = async () => {
	const randomNumber = Math.floor(Math.random() * 5);
	const randomWords = ["hello","ship","boy","mother","mountain","cocktail","soda","water","ice","fire","ear","bath","airplane","snake","castle","water"]
	const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
	
	const randomUrl = `https://www.omdbapi.com/?apikey=df39bfa7&s=${randomWord}`
	const randomResponse = await fetch(randomUrl);
	const randomResponseJson = await randomResponse.json();

	if(randomResponseJson.Search) {
		return randomResponseJson.Search[randomNumber];
	}
}

const MovieList = (props) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		for (let i = 0; i < 2; i++) {
			GetMovie().then((movie) => {
				if (movie) {
					setMovies((movies) => [...movies, movie]);
				};
			});
		}
	}, [])

	return (
	<div className='movie-list'>
			{movies.map((movie) =>
				<MovieCard key={movie.Title} image={movie.Poster} year={movie.Year} title={movie.Title} />
			)}
			<MovieCardPlaceholder />
	</div>
  )
}

export default MovieList;