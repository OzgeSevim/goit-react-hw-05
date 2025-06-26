import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NjNWU2MTA0YjMwZjU1YTNmM2I1MjVlYzQ4MzBiMSIsIm5iZiI6MTc0Mzc3NzM3OS4zNTY5OTk5LCJzdWIiOiI2N2VmZWU2M2VkZThkODJmM2JhZDI0MTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RoZfo2b2MasEK8HqlY1JYz-al1Lu6C-nXCTMcVfcyQM",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(`${baseUrl}/trending/movie/day`, options);
  console.log(response);
  return response.data.results;
};

export const fetchMovieDetails = async (movie_id) => {
  const response = await axios.get(`${baseUrl}/movie/${movie_id}`, options);
  console.log(response);
  return response.data;
};

export const fetchMovieCast = async (movie_id) => {
  const response = await axios.get(
    `${baseUrl}/movie/${movie_id}/credits`,
    options
  );
  console.log(response);
  return response.data.cast;
};

export const searchMovie = async (query) => {
  const response = await axios.get(`${baseUrl}/search/movie`, {
    ...options,
    params: {
      query: query,
    },
  });
  console.log(response);
  return response.data.results;
};

export const fetchMovieReviews = async (movie_id) => {
  const response = await axios.get(
    `${baseUrl}/movie/${movie_id}/reviews`,
    options
  );
  console.log(response);
  return response.data.results;
};
