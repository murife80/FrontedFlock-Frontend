// src/components/MovieRow.jsx
import React from 'react';
import './MovieRow.css';
import MovieCard from './MovieCard';

function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
