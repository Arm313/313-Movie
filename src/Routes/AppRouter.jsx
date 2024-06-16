import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesCategory from "../Components/MoviesCategory/MoviesCategory";
import MoviesInGenres from "../Components/MoviesInGenres/MoviesInGenres";
import SeriesCategory from "../Components/SeriesCategory/SeriesCategory";
import SeriesInGenres from "../Components/SeriesInGenres/SeriesInGenres";
import Watch from "../Components/Watch/Watch";
import WatchSerie from "../Components/WatchSerie/WatchSerie";
import HomePage from "../Pages/HomePage/HomePage";
import Layout from "../Pages/Layout";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import PersonsPage from "../Pages/PersonsPage/PersonsPage";
import SeriesPage from "../Pages/SeriesPage/SeriesPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:path" element={<MoviesCategory />} />
          <Route path="watch/:id" element={<Watch />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="series/:path" element={<SeriesCategory />} />
          <Route path="watchtv/:id" element={<WatchSerie />} />
          <Route path="genres/:genre" element={<MoviesInGenres />} />
          <Route path="genres-series/:genre" element={<SeriesInGenres />} />
          <Route path="persons" element={<PersonsPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
