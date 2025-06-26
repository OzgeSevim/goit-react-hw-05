import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to="/movies/${movieId}" state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default MovieList;
