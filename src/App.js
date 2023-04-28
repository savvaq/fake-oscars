import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameRules from './components/GameRules/GameRules' 
import Game from './components/Game/Game';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Fake Oscars Game";
  }, []);

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<GameRules />} />
          <Route path="/questions" element={<Game />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />          
        </Routes>
      <Footer />
    </>
  );
}

export default App;
