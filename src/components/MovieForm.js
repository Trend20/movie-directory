import React, {useState} from 'react'
import styled from 'styled-components';
import MovieList from './MovieList';
import Search from './Search';

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
    <MovieFormContainer className='movie-form'>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup className="form-group">
          <label htmlFor="name">Movie Name</label>
          <FormInput type="text"
          value={name} 
          onChange={(event) => setName(event.target.value)}
          placeholder='Enter Movie Name'
          />
        </FormGroup>
        <FormGroup className="form-group">
          <label htmlFor="ratings">Ratings</label>
          <FormInput 
          type="number" 
          placeholder='Enter ratings'
          value={ratings} 
          onChange={(event) => setRatings(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <label htmlFor="duration">Duration</label>
          <FormInput 
          type="text" 
          placeholder='Enter duration in hours or minutes'
          value={duration} 
          onChange={(event) => setDuration(event.target.value)}
          />
        </FormGroup>

        <Button type="submit">Add Movie</Button>
      </Form>

      <Search />
      <MovieList movies={movies} />
    </MovieFormContainer>
  )
}

const MovieFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 50px;
  margin: auto;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 
`

const FormGroup = styled.div`
  display: flex;
  flex-direction:column;
  margin-top: 15px;
`

const FormInput = styled.input`
  display: flex;
  padding: 10px 5px;
  outline: none;
  border: none;
  margin-top: 10px;
  background-color: #e5f2e4;
`

const Button = styled.button`
  display: flex;
  padding: 10px;
  outline: none;
  border: none;
  margin-top: 15px;
  justify-content: center;
  align-items: flex-end;
  width: 30%;
  background-color: #1a8011;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`


export default MovieForm;