import React, { useEffect, useState, useRef } from "react";
import { fetchMovieDetails } from "../components/Apı";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [movieId]);

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Link to={backLinkRef.current}>⬅ Geri</Link>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="200px"
            height="400px"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
          }}
        >
          <h1>{movie.title}</h1>
          {/* <p> User Score :{movie.vote_average}</p> */}
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {/* <p>{movie.genres.map((genre) => genre.name).join(", ")}</p> */}
          <p>
            {Array.isArray(movie.genres) && movie.genres.length > 0
              ? movie.genres.map((genre) => genre.name).join(", ")
              : "Tür bilgisi yok"}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
