import './MovieCard.css'
import imdb_logo from '../img/imdb_logo.png'
import question_icon from '../img/question_icon.png'

const MovieCard = (props) => {
  
    return (
      <div className="movie-card">
        <img src={props.image} alt="poster" className="movie-card-img" />          
        <div className="movie-card-content">
          <div className="movie-card-text">
            <h2>{props.title}</h2>
            <p>Year: {props.year}</p>
          </div>
          <div className="imdb_rating">
            <div className="imdb_rating_text">
              <img src={imdb_logo} alt="imdb_logo" className='imdb_logo_img' />
              <p>Rating</p>
            </div>
            <div className="imdb_rating_score">
              <img src={question_icon} alt="imdb_logo" className='question_icon_img' />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default MovieCard;