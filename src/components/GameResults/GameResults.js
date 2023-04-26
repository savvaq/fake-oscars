import './GameResults.css'
import MovieCard from '../MovieCard/MovieCard';
import { Link } from "react-router-dom";

const GameResults = (props) => {

    const highestSelectedMovie = props.submissions.reduce((highest, current) => {
        return highest.IMDBScore > current.IMDBScore ? highest : current;
    });

    const lowestSelectedMovie = props.submissions.reduce((lowest, current) => {
        return lowest.IMDBScore < current.IMDBScore ? lowest : current;
    });

    // console.log(highestSelectedMovie);
    // console.log(lowestSelectedMovie);

    return (
        <div className='game-results-wrapper'>
            <h1>Well Played!</h1>
            <div id="final-score">
                <p id="final-score-text">Your final score is</p>
                <div id="final-score-number">{props.score} / 5</div>
            </div>
            <div id="highest-selected-movie">
                <p>Higest selected movie</p>
                <MovieCard image={highestSelectedMovie.Poster} year={highestSelectedMovie.Year} title={highestSelectedMovie.Title} imdbScore={highestSelectedMovie.IMDBScore} />
            </div>
            <div id="lowest-selected-movie">
                <p>Lowest selected movie</p>
                <MovieCard image={lowestSelectedMovie.Poster} year={lowestSelectedMovie.Year} title={lowestSelectedMovie.Title} imdbScore={lowestSelectedMovie.IMDBScore} />
            </div>
            <Link to="/">
                <button Link to="/" class="main-button">Play Again</button>
            </Link>
        </div>
    )    
};

export default GameResults;