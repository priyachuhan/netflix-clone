import React, { useEffect, useState } from "react";
import MovieCard from "./Moviecard";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [fetchUrl]);

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Row;
