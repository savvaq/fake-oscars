import { useEffect } from 'react';
import './SearchResults.css'

const SearchResults = (props) => {
  
  const executeClick = () => {
    console.log("CLICKED");
  }

    return (
      <>
        <div class="movie-search-results-wrapper">
            {props.movies.map((movie) => (
                <div class="movie-search-result-wrapper" 
                  key={movie.imdbID}>
                    <div class="movie-search-result-content">
                      <img className="movie-search-result-img" src={movie.Poster} alt="logo" />
                      <div className="movie-search-result-text">
                        <h3>{movie.Title}</h3>
                        <span>{movie.Year}</span>
                        <button onClick={() => executeClick()} className="movie-search-result-button">Nominate</button>
                      </div>
                    </div>
                </div>
            ))}
        </div>
      </>
    )
  }
  
  export default SearchResults;
