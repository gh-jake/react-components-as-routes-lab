import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsArray = directors.map((director) => {
    const directorMovies = director.movies.map((movie) => <li>{movie}</li>)
    return (
      <div>
        <h2>{director.name}</h2>
        <ul>{directorMovies}</ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArray}
    </div>
  );
}

export default Directors
