import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesCategory from "../Components/MoviesCategory/MoviesCategory";
import MoviesInGenres from "../Components/MoviesInGenres/MoviesInGenres";
import PaginationPageMovies from "../Components/PaginationPageMovies/PaginationPageMovies";
import PaginationPageSeries from "../Components/PaginationPageSeries/PaginationPageSeries";
import Search from "../Components/Seacrh/Search";
import SeriesCategory from "../Components/SeriesCategory/SeriesCategory";
import SeriesInGenres from "../Components/SeriesInGenres/SeriesInGenres";
import Watch from "../Components/Watch/Watch";
import WatchSerie from "../Components/WatchSerie/WatchSerie";
import FilterPage from "../Pages/FilterPage/FilterPage";
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<LayoutMoviesPage />}>
            <Route index element={<MoviesPage />} />
            <Route path=":path" element={<MoviesCategory />} />
            <Route path=":path/:page?" element={<PaginationPageMovies />} />
          </Route>
          <Route path="series" element={<LayoutSeriesPage />}>
            <Route index element={<SeriesPage />} />
            <Route path=":path" element={<SeriesCategory />} />
            <Route path=":path/:page?" element={<PaginationPageSeries />} />
          </Route>
          <Route path="filter/:path" element={<FilterPage />} />
          <Route path="watch/:id" element={<Watch />} />
          <Route path="watchtv/:id" element={<WatchSerie />} />
          <Route path="genres/:genre" element={<MoviesInGenres />} />
          <Route path="genres-series/:genre" element={<SeriesInGenres />} />
          <Route path="persons" element={<PersonsPage />} />
          <Route path="search-movies" element={<Search />} />
          <Route path="search-series" element={<Search />} />
          <Route
            path="*"
            element={
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  marginTop: "50px",
                }}
              >
                NOT FOUND PAGE
              </h1>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
