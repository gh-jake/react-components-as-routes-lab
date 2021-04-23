import React from 'react';
import { actors } from '../data';

const Actors = () => {    
  const actorsArray = actors.map((actor) => {
    const actorMovies = actor.movies.map((movie) => <li>{movie}</li>)
    return (
      <div>
        <h2>{actor.name}</h2>
        <ul>{actorMovies}</ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArray}
    </div>
  );
};

export default Actors;
