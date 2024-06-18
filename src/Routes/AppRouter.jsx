import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesCategory from "../Components/MoviesCategory/MoviesCategory";
import MoviesInGenres from "../Components/MoviesInGenres/MoviesInGenres";
import PaginationPages from "../Components/PaginationPages/PaginationPages";
import SeriesCategory from "../Components/SeriesCategory/SeriesCategory";
import SeriesInGenres from "../Components/SeriesInGenres/SeriesInGenres";
import Watch from "../Components/Watch/Watch";
import WatchSerie from "../Components/WatchSerie/WatchSerie";
import HomePage from "../Pages/HomePage/HomePage";
import Layout from "../Pages/Layout";
import LayoutMoviesPage from "../Pages/LayoutMoviesPage";
import LayoutSeriesPage from "../Pages/LayoutSeriesPage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import PersonsPage from "../Pages/PersonsPage/PersonsPage";
import SeriesPage from "../Pages/SeriesPage/SeriesPage";

const AppRouter = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:path" element={<MoviesCategory />} />
          <Route path="movies/:path/:page?" element={<h1>page</h1>} />
          <Route path="watch/:id" element={<Watch />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="series/:path" element={<SeriesCategory />} />
          <Route path="watchtv/:id" element={<WatchSerie />} />
          <Route path="genres/:genre" element={<MoviesInGenres />} />
          <Route path="genres-series/:genre" element={<SeriesInGenres />} />
          <Route path="persons" element={<PersonsPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<LayoutMoviesPage />}>
            <Route index element={<MoviesPage />} />
            <Route path=":path" element={<MoviesCategory />} />
            <Route path=":path/:page?" element={<PaginationPages />} />
          </Route>
          <Route path="series" element={<LayoutSeriesPage />}>
            <Route index element={<SeriesPage />} />
            <Route path=":path" element={<SeriesCategory />} />
            <Route path=":path/:page?" element={<PaginationPages />} />
          </Route>
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
