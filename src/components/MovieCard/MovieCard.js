import './MovieCard.css'
import imdb_logo from '../img/imdb_logo.png'
import question_icon from '../img/question_icon.png'
import movie_img_test from '../img/movie_image_test.jpeg'

const MovieCard = (props) => {
  
    return (
      <div className="movie-card">
        <img src={movie_img_test} alt="poster" className="movie-card-img" />          
        <div className="movie-card-content">
          <div className="movie-card-text">
            <h2>Titanic</h2>
            <p>Year: 1994</p>
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