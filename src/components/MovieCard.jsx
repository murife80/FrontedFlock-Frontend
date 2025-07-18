 // src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

function MovieCard({ title, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
    </div>
  );
}

export default MovieCard;
