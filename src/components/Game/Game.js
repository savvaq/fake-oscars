import { useState } from 'react';
import './Game.css'

const Game = () => {

  const [roundNumber, setRoundNumber] = useState(1);
  function handleClick() {
    setRoundNumber(roundNumber + 1);
  }

  return (
    <>
      <h1>Round {roundNumber}</h1>
      <button onClick={handleClick}>Next</button>
    </>
  )
}

export default Game;