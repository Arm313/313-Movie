import { Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchAllMovies } from "../store/Movies/API";
import { selectMovies } from "../store/Movies/moviesSlice";
import MoviesPage from "./MoviesPage/MoviesPage";

const LayoutMoviesPage = () => {
  return (
    <div>
      <div className="moviesPage maxWidth">
        <h1> Movies Watch Online</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutMoviesPage;
