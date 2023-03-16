import './SearchBox.css'

const SearchBox = (props) => {
  
  return (
    <div className="homepage-search">
      <h2>Find a Movie to Nominate</h2>
      <form className="homepage-search-form">  
        <input 
          className="homepage-search-box"
          value={props.value}
          onChange={(event) => props.setSearch(event.target.value)}
          placeholder="Search for a movie here...."
        />
      </form>
    </div>
  )
}

export default SearchBox;