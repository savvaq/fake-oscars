import './SearchResults.css'

const SearchResults = (props) => {

  return (
    <>
      <div class="movie-search-results-wrapper">
          {props.movies.map((movie) => (
              <div class="movie-search-result-wrapper" 
                key={movie.imdbID}
                onClick={() => props.addMovie(movie)}>
                  <div class="movie-search-result-content">
                    <img className="movie-search-result-img" src={movie.Poster} alt="logo" />
                    <div className="movie-search-result-text">
                      <h3>{movie.Title}</h3>
                      <span>{movie.Year}</span>
                    </div>
                  </div>
              </div>
          ))}
      </div>
    </>
  )
}
  
  export default SearchResults;
