import React, { useState, useEffect } from "react";
import { searchMovie } from "../components/Apı";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovie(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    console.log(value);
    setSearchParams({
      query: value,
    });
  };

  return (
    <div>
      <div>
        <MovieList movies={movies} />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ position: "absolute", top: "20px" }}
      >
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesPage;
