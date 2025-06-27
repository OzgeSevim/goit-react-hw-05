import React, { useEffect, useState } from "react";
import { fetchMovies } from "../components/Apı";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
