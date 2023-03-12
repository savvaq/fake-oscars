import './GameRules.css'
import MainButton from '../MainButton/MainButton';
import hero_image from "../img/hero_image.png"
import number_one from "../img/number_one.png"
import number_two from "../img/number_two.png"
import number_three from "../img/number_three.png"

const GameRules = () => {
    return (
				<div className='game-rules-container'>
					<div className='game-rules-text'>
						<h1>How To Play The Game</h1>
            <div className="circle">1</div>
            <span>4 random movies will be presented to you</span>
            <div className="circle">2</div>
            <span>Try to find and select the movie with higher IMDB rating</span>
            <div className="circle">3</div>
            <span>Earn points if your movie gets prestigious “Fake Oscar”</span>
					</div>
          <img src={hero_image} alt="" className='hero_image' />
          <MainButton ButtonText="Start" />
				</div>
    )
}

export default GameRules;