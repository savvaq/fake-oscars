import { useState, useEffect } from 'react';
import './Game.css'
import MovieList from '../MovieList/MovieList';
import Search from '../Search/Search';

const Game = () => {

  const [roundNumber, setRoundNumber] = useState(1);
  // const [score, setScore] = useState(0);
  // const [selectedMovie, setSelectedMovie] = useState([]);

  return (
    <div className='game-wrapper'>
      <h1>Round {roundNumber}</h1>
      <div className='search-wrapper'><Search /></div>
      <MovieList />
      <button class="main-button" id="game-button" onClick={() => setRoundNumber(roundNumber + 1)}>Sumbit</button>
    </div>
  )
}

export default Game;

// 