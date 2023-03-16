import './SearchResults.css'

const SearchResults = (props) => {
    
    return (
      <>
        <ul class="movie-search-results">
            {props.movies.map((movie) => (
                <li key={movie.imdbID}>{movie.Title}></li>
            ))}
        </ul>
      </>
    )
  }
  
  export default SearchResults;
