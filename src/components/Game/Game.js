import { useState, useEffect } from 'react';
import './Game.css'
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import MovieList from '../MovieList/MovieList';

const Game = () => {

  const [roundNumber, setRoundNumber] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const searchMovies = async (search) => {
    const url = `https://www.omdbapi.com/?apikey=df39bfa7&s=${search}`
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setSearchResults(responseJson.Search)
    }

    console.log(searchResults);
  }

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue])

  return (
    <div className='game-wrapper'>
      <h1>Round {roundNumber}</h1>
      <div className='search-wrapper'>
        <SearchBox search={searchValue} setSearch={setSearchValue} />
        <SearchResults movies={searchResults} />
      </div>
      <MovieList />
      <button class="main-button" id="game-button" onClick={() => setRoundNumber(roundNumber + 1)}>Sumbit</button>
    </div>
  )
}

export default Game;