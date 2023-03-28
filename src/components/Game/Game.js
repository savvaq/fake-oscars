import { useState, useEffect } from 'react';

import './Game.css'
import MovieList from '../MovieList/MovieList';
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';

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

const Game = () => {
  const [placeholder, setPlaceholder] = useState([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [nomination, setNomination] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [movies, setMovies] = useState([]);

  // const [score, setScore] = useState(0);
  const placeholderMovie = [
    {
        Title: "Titanic",
        Year: "1997",
        Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];
  
  const addPlaceholder = () => {
    setPlaceholder(() => [...placeholder,placeholderMovie[0]]);
  }

  useEffect(() => {
		for (let i = 0; i < 2; i++) {
			GetMovie().then((movie) => {
				if (movie) {
					setMovies((movies) => [...movies, movie]);
				};
			});
		}
	}, [])

  const searchMovies = async (search) => {
    const url = `https://www.omdbapi.com/?apikey=df39bfa7&s=${search}`
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setSearchResults(responseJson.Search)
      setShowResults(true);
    }
  }

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue])

  return (
    <div className='game-wrapper'>
      <h1>Round {roundNumber}</h1>
      <SearchBox search={searchValue} setSearch={setSearchValue} setShowResults={setShowResults} />
      {
      showResults && searchValue.length > 0 ? 
      <SearchResults movies={searchResults} />:null
      }
      <MovieList placeholder={placeholder} movies={movies} />
      <button onClick={() => addPlaceholder()} class="main-button" id="game-button">Set Nomiation</button>
      <button class="main-button" id="game-button" onClick={() => setRoundNumber(roundNumber + 1)}>Sumbit</button>
    </div>
  )
}

export default Game;