import { useState, useEffect } from 'react';
import './Game.css'
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';

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
    <>
      <h1>Round {roundNumber}</h1>
      <SearchBox search={searchValue} setSearch={setSearchValue} />
      <SearchResults movies={searchResults} />
      <button class="main-button" onClick={() => setRoundNumber(roundNumber + 1)}>Next</button>
    </>
  )
}

export default Game;