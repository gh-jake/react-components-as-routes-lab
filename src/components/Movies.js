import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesArray = movies.map((movie) => {
    const movieGenres = movie.genres.map((genre) => <li>{genre}</li>)
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.time} minutes</p>
        <ul>{movieGenres}</ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesArray}
    </div>
  );
};

export default Movies;
