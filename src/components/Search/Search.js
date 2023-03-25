import { useState, useEffect } from "react";
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [nomination, setNomination] = useState([]);

    const addNomination = (nomination) => {
      setNomination((nomination) => [...nomination, nomination]);
    }

    const searchMovies = async (search) => {
        const url = `https://www.omdbapi.com/?apikey=df39bfa7&s=${search}`
        const response = await fetch(url);
        const responseJson = await response.json();
    
        if(responseJson.Search) {
          setSearchResults(responseJson.Search)
          setShowResults(true);
        }
      }
    
      useEffect(() => {
        searchMovies(searchValue);
      }, [searchValue])

    return(
        <>
            <SearchBox search={searchValue} setSearch={setSearchValue} setShowResults={setShowResults} />
            {
            showResults && searchValue.length > 0 ? 
            <SearchResults movies={searchResults} handleNominationClick={addNomination} />:null
            }
        </>
    )
}

export default Search;