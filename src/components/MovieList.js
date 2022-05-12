import React from 'react'

function MovieList(props) {
  return (
    <div>
      {
       props.movies.map((movie, index) =>(
         <div key={index}>
           <h1>{movie.name}</h1>
           <p>{movie.name}</p>
           <p>{movie.name}</p>
         </div>
       )) 
      }
    </div>
  )
}

export default MovieList;