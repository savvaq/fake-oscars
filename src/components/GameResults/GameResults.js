import './GameResults.css'
import MovieCard from '../MovieCard/MovieCard';

const GameResults = (props) => {
    return (
        <div className='game-results-wrapper'>
            <h1>Well Played!</h1>
            <div id="final-score">
                <p id="final-score-text">Your final score is</p>
                <div id="final-score-number">{props.score} / 5</div>
            </div>
        </div>
    )    
};

export default GameResults;