import React, {useState} from 'react'
import styled from 'styled-components';

const MovieForm = (props) =>{

  const [name, setName] = useState("");
  const [ratings, setRatings] = useState(0);
  const [duration, setDuration] = useState("");
  const [movies, setMovies] = useState([]);


  const handleFormSubmit = (e) =>{
    e.preventDefault();

    const newMovie = {
      name: name,
      ratings: ratings,
      duration: duration
    }

    setMovies(movies.concat(newMovie));
    setName("");
    setRatings("");
    setDuration("");
  }

  return (
    <div className='movie-form'>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Movie Name</label>
          <input type="text"
          value={name} 
          onChange={(event) => setName(event.target.value)}
          placeholder='Enter Movie Name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="ratings">Ratings</label>
          <input 
          type="number" 
          placeholder='Enter ratings'
          value={ratings} 
          onChange={(event) => setRatings(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input 
          type="text" 
          placeholder='Enter duration in hours or minutes'
          value={duration} 
          onChange={(event) => setDuration(event.target.value)}
          />
        </div>

        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}


export default MovieForm;