import './MovieCardPlaceholder.css'
import film_icon from '../img/film-icon.png'


const MovieCardPlaceholder = () => {
  
    return (
      <div className='movie-card-placeholder-wrapper'>
				{/* <span className='movie-card-title-text'>Your Selection</span> */}
				<div className="movie-card-placeholder">
					<img src={film_icon} alt="film-icon" className="film-icon" />
					<span>Search for a movie above to add it here</span>
      	</div>
			</div>
    )
  }
  
  export default MovieCardPlaceholder;