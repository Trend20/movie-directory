import React, {useState} from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Search from './components/Search';

const App = () =>{

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredName, setFilteredName] = useState("");


  const handleSearch = (newSearchTerm) =>{
    setSearchTerm(newSearchTerm)
    movies.map((movie) =>{
      if(movie.includes(searchTerm)){
        setFilteredName(movie)
      }
    })
  }
  return (
    <div className="app">
     <MovieForm movies={movies} setMovies={setMovies} />
     <MovieList movies={movies} />
     <Search handleSearch={handleSearch} />
     <div>
       <ul>
        {filteredName}
       </ul>
     </div>
    </div>
  );
}

export default App;