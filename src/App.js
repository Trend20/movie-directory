import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <MovieForm />
     <Search />
     <MovieList />
    </div>
  );
}

export default App;
