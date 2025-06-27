import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "./Apı";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        console.log(data);
        setReview(data);
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
      {review.map((item) => (
        <li key={item.author_details.id}>
          <h3>Author : {item.author}</h3>
          <p>{item.content}</p>
        </li>
      ))}
    </div>
  );
};

export default MovieReviews;
