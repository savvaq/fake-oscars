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
  const [roundNumber, setRoundNumber] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [movies, setMovies] = useState([]);
  const [score, setScore] = useState(0);
  const [submissions, setSubmissions] = useState([]);
  
  const addMovie = (movie) => {
    if (movies.length < 5) {
      setMovies([...movies, movie]);     
    } else {
      movies.pop();
      setMovies([...movies, movie]);
    }
  }

  const updateScore = () => {
    let maxScore = Math.max(...movies.map(movie => movie.IMDBScore))
    let nomiationScore = Number(movies[4].IMDBScore);
    console.log(`nomination rating is: ${nomiationScore} typeof: ${typeof nomiationScore}`);
    console.log(`max score is: ${maxScore} typeof: ${typeof maxScore}`);
    if (nomiationScore < maxScore) {
      console.log('you lose');
    } else {
      setScore(score + 1);
      setSubmissions([...submissions, movies[4].Title]);
    }
  }
  
  const AssignIMDBScore = async () => {
    for (let i = 0; i < movies.length; i++) {
      const url = `https://www.omdbapi.com/?apikey=df39bfa7&t=${movies[i].Title}`
      const response = await fetch(url);
      const responseJson = await response.json();
      
      if (movies[i].Title === responseJson.Title) {
        movies[i].IMDBScore = responseJson.imdbRating;
      }

      setMovies(movies);
    }
    updateScore();
  }

  useEffect(() => {
		for (let i = 0; i < 2; i++) {
      console.log(1);
			GetMovie().then((movie) => {
        console.log(2);
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

  const startNewRound = () => {
    setMovies([]);

    for (let i = 0; i < 4; i++) {
      GetMovie().then((movie) => {
        if (movie) {
          setMovies((movies) => [...movies, movie]);
        };
      });
    }
  };

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue])

  return (
    <div className='game-wrapper'>
      <h1>Round {roundNumber}</h1>
      <h2 id='score-result'>Score: {score} / 5</h2>
      <SearchBox search={searchValue} setSearch={setSearchValue} setShowResults={setShowResults} />
      {
      showResults && searchValue.length > 0 ? 
      <SearchResults movies={searchResults} addMovie={addMovie} />:null
      }
      <MovieList movies={movies} />
      <button onClick={() => AssignIMDBScore()} class="main-button" id="game-button">Sumbit</button>
      <button onClick={() => startNewRound() && setRoundNumber(roundNumber + 1)} class="main-button" id="game-button">Next Round</button>
    </div>
  )
}

export default Game;