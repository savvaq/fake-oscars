import './GameRules.css'
import hero_image from "../img/hero_image.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GameRules = () => {
    return (
				<div className='game-rules-container'>
					<div className='game-rules-text'>
						<h1>How To Play The Game</h1>
            <div className="number-circle">1</div>
            <span>4 random movies will be presented to you</span>
            <div className="number-circle">2</div>
            <span>Try to find and select the movie with higher IMDB rating</span>
            <div className="number-circle">3</div>
            <span>Earn points if your movie gets prestigious “Fake Oscar”</span>
					</div>
          <img src={hero_image} alt="" className='hero_image' />
          <Link to="/questions">
            <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.8 }} 
            class="main-button">
              Start
            </motion.button>
          </Link>
				</div>
    )
}

export default GameRules;