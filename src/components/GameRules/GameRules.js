import './GameRules.css'
import hero_image from "../img/hero_image.png"
import number_one from "../img/number_one.png"
import number_two from "../img/number_two.png"
import number_three from "../img/number_three.png"

const GameRules = () => {
    return (
				<div className='game-rules-container'>
					<div className='game-rules-text'>
						<h1>How To Play The Game</h1>
            <img src={number_one} alt="" />
            <span>4 random movies will be presented to you</span>
            <img src={number_two} alt="" />
            <span>Try to find and select the movie with higher IMDB rating</span>
            <img src={number_three} alt="" />
            <span>Earn points if your movie gets prestigious “Fake Oscar”</span>
					</div>
          <img src={hero_image} alt="" className='hero_image' />
				</div>
    )
}

export default GameRules;