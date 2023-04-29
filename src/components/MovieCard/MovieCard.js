import './MovieCard.css'
import imdb_logo from '../img/imdb_logo.png'
import question_icon from '../img/question_icon.png'
import { motion } from "framer-motion";



const MovieCard = (props) => {
  const movieCardDivStyle = props.winner ? 'movie-card-winner' : 'movie-card';
  const trimTitle = (title) => {
    if (title.length > 20) {
      return title.slice(0, 30) + '...';
    } else {
      return title;
    }
  };

  const imdbRatingDisplay = () => {
    if (props.imdbScore) {
      return <motion.div 
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "50%"],
        }}
        className='movie-score-wrapper'>{props.imdbScore}
      </motion.div>
    } else if (props.loading === true && !props.imdbScore) {
      return <span class="loader"></span>
    } else {
      return <img src={question_icon} alt="imdb_logo" className='question_icon_img' />
    }
  }

  return (
      <div className={movieCardDivStyle}>
        <img src={props.image} alt="poster" className="movie-card-img" />          
        <div className="movie-card-content">
          <div className="movie-card-text">
            <h2>{trimTitle(props.title)}</h2>
            <p>Year: {props.year}</p>
          </div>
          <div className="imdb_rating">
            <div className="imdb_rating_text">
              <img src={imdb_logo} alt="imdb_logo" className='imdb_logo_img' />
              <span>Rating</span>
            </div>
            <div className="imdb_rating_score">
              {imdbRatingDisplay()}
            </div>
          </div>
        </div>
      </div>
    )};
  
  export default MovieCard;