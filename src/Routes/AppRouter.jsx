import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesCategory from "../Components/MoviesCategory/MoviesCategory";
import Watch from "../Components/Watch/Watch";
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
          <Route path="series" element={<MoviesPage />} />
          <Route path="series/:path" element={<MoviesCategory />} />
          {/* <Route path="watch/:id" element={<Watch />} /> */}
          <Route path="persons" element={<PersonsPage />} />
          {/* <Route path="watch/:id" element={<Watch />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
