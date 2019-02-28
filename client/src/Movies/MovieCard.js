import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({
  savedList,
  addToSavedList,
  movie,
  movie: { title, director, metascore, stars, id }
}) => {
  return (
    <Link to={`/movies/${id}`} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <button
        className="save-button"
        onClick={(e) =>{
          e.preventDefault();
          addToSavedList(movie);
        }}
        disabled={savedList.findIndex(m => m.id === id) > -1}
      >
        Save
      </button>
    </Link>
  );
};

export default MovieCard;
