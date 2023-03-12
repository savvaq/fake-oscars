import './App.css';
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
          <Route path="/question/:id" element={<Game />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
