import { lazy, Suspense, useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchMovies,
  searchMovie,
  fetchMovieReviews,
} from "./Apı";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  useEffect(() => {
    fetchMovies();
    fetchMovieDetails(911430);
    fetchMovieCast(911430);
    searchMovie("apple");
    fetchMovieReviews(803796);
  });
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
