import './App.css';
import MovieCard from './components/MovieCard/MovieCard.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameRules from './components/GameRules/GameRules' 
import Game from './components/Game/Game';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<GameRules />} />
          <Route path="/question1" element={<Game />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
