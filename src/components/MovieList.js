import React, { useState} from 'react'
import styled from 'styled-components';
import Search from './Search';

function MovieList({movies}) {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredName, setFilteredName] = useState({});


  
  const displayItems = movies.map((movie, index) =>{
    return(
         <MovieContainer key={index}>
           <h4>Name: {movie.name}</h4>
           <h5>Ratings: {movie.ratings}</h5>
           <h6>Duration: {movie.duration}</h6>
         </MovieContainer>
    )
  })

  const handleSearch = (newSearchTerm) =>{
    setSearchTerm(newSearchTerm)
    movies.map((movie) =>{
      if(movie.includes(newSearchTerm)){
        setFilteredName(movie)
      }else{
        setFilteredName("")
      }
    })
  }

  return (
   <div style={{ display: "flex", flexDirection: 'column', width: '100%' }}>

    <Search handleSearch={handleSearch} />
     <div>
       <div>
         <li>{filteredName.name}</li>
         <li>{filteredName.duration}</li>
         <li>{filteredName.ratings}</li>
       </div>
       <MovieListContainer className='movie-list'>
         {displayItems}
       </MovieListContainer>
       
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