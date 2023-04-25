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
            <div id="highest-selected-movie">
                <p>Higest selected movie</p>
                <MovieCard image={props.submissions[0].Poster} year={props.submissions[0].Year} title={props.submissions[0].Title} imdbScore={props.submissions[0].IMDBScore} />
            </div>
            <div id="lowest-selected-movie">
                <p>Lowest selected movie</p>
                <MovieCard image={props.submissions[4].Poster} year={props.submissions[4].Year} title={props.submissions[4].Title} imdbScore={props.submissions[4].IMDBScore} />
            </div>
            <button className='main-button' id="play-again-button">Play Again</button>
        </div>
    )    
};

export default GameResults;