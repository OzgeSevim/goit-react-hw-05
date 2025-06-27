import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../components/Apı";
const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        console.log(data);
        setCast(data);
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
      {cast.map((item) => (
        <li key={item.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
            width="120px"
          />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </div>
  );
};

export default MovieCast;
