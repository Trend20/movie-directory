import React, {useState} from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

const App = () =>{

  const [movies, setMovies] = useState([]);



  return (
    <div className="app">
     <MovieForm movies={movies} setMovies={setMovies} />
     <MovieList movies={movies} />
    </div>
  );
}

export default App;