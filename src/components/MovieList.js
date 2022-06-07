import React, { useState} from 'react'
import styled from 'styled-components';
import Search from './Search';

function MovieList({movies}) {

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
   <div style={{ display: "flex", flexDirection: 'column', width: '100%' }}>
      <MovieListContainer className='movie-list'>
      {
       movies.map((movie, index) =>(
         <MovieContainer key={index}>
           <h4>Name: {movie.name}</h4>
           <h5>Ratings: {movie.ratings}</h5>
           <h6>Duration: {movie.duration}</h6>
         </MovieContainer>
       )) 
      }
    </MovieListContainer>

    <Search handleSearch={handleSearch} />
     <div>
       <ul>
        {filteredName}
       </ul>
       
     </div>
   </div>
  )
}

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 20px;
  width: 1005;
  margin-top: 30px;
`

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 5px;
  padding: 20px;
`

export default MovieList;