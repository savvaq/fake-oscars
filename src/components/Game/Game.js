import { useState, useEffect } from 'react';

import './Game.css'
import MovieList from '../MovieList/MovieList';
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import RoundEnd from '../RoundEnd/RoundEnd';
import { motion } from "framer-motion";

const GetMovie = async () => {
	const randomNumber = Math.floor(Math.random() * 5);
	const randomWords = ["hello","ship","boy","mother","mountain","cocktail","soda","water","ice","fire","ear","bath","airplane","snake","castle","water","titanic","schawshank","undersand","harry"]
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
  const [roundEndMessage, setRoundEndMessage] = useState({});
  const [winner, setWinner] = useState([]);

  const addMovie = (movie) => {
    if (movies.length < 5) {
      setMovies([...movies, movie]);
      setShowResults(false);      
    } else {
      movies.pop();
      setMovies([...movies, movie]);
      setShowResults(false);    }
  }

  const updateScore = () => {
    let maxScore = Math.max(...movies.map(movie => movie.IMDBScore));
    maxScore = maxScore.toString();
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].IMDBScore == maxScore) {
        movies[i].winner = true;
      } else {
        movies[i].winner = false;
      }
    }
    maxScore = Number(maxScore);
    let nominationScore = Number(movies[4].IMDBScore);
    if (nominationScore < maxScore) {
      setRoundEndMessage({
        message: `Sorry, ${movies[4].Title} was not the highest rated movie!`,
        type: 'loser'
     });
    } else {
      setScore(score + 1);
      setRoundEndMessage({
        message: `Well done, ${movies[4].Title} was the highest rated movie!`,
        type: 'winner'
      });
      console.log(roundEndMessage)
      setSubmissions([...submissions, movies[4].Title]);
    }
  }
  
  console.log(movies);
  console.log(roundEndMessage);

  const AssignIMDBScore = async () => {
    for (let i = 0; i < movies.length; i++) {
      const url = `https://www.omdbapi.com/?apikey=df39bfa7&t=${movies[i].Title}`
      const response = await fetch(url);
      const responseJson = await response.json();
      
      if (movies[i].Title === responseJson.Title) {
        movies[i].IMDBScore = responseJson.imdbRating;
      }
    }
    updateScore();
  }

  useEffect(() => {
		for (let i = 0; i < 2; i++) {
			GetMovie().then((movie) => {
				if (movies.length < 4) {
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
    setWinner([]);

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
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
    className='game-wrapper'>
      <h1>Round {roundNumber}</h1>
      {
        roundEndMessage.message ?
        <RoundEnd roundEndMessage={roundEndMessage} score={score}/>
        :
        <SearchBox search={searchValue} setSearch={setSearchValue} setShowResults={setShowResults} />
      }
      {
      showResults && searchValue.length > 0 ? 
      <SearchResults movies={searchResults} addMovie={addMovie} />:null
      }
      <MovieList movies={movies} winner={winner} />
      {
        roundEndMessage.message ? 
        <button onClick={() => startNewRound() & setRoundNumber(roundNumber + 1) & setRoundEndMessage('')} class="main-button" id="game-button">Next Round</button>
        :
        <button onClick={() => AssignIMDBScore()} class="main-button" id="game-button">Sumbit</button>
      }
    </motion.div>
  )
}

export default Game;