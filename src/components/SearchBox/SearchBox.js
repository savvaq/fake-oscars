import './SearchBox.css'

const SearchBox = (props) => {
  
  return (
    <div className="searchbox">
      <h2>Find a movie with higher IMDB rating than the ones below</h2>
      <form className="searchbox-form">
        <input 
          className="searchbox-box"
          value={props.value}
          onChange={(event) => props.setSearch(event.target.value)}          
          placeholder="search for a movie here..."
        />
      </form>
    </div>
  )
}

export default SearchBox;