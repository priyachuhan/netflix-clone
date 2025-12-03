import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <img
      className="w-40 h-60 object-cover rounded-lg hover:scale-105 transition transform"
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
  );
};

export default MovieCard;
