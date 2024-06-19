import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectMovies } from "../../store/Movies/moviesSlice";
import SwiperCard from "../SwiperCard/SwiperCard";
import "./MoviesAllSlider.scss";

const MoviesAllSlider = () => {
  const { now_playing, popular, top_rated, upcoming } =
    useSelector(selectMovies);
  return (
    <>
      <NavLink className="navlinkPath" to={`/movies/top_rated`}> Top Rated Movies</NavLink>
      <SwiperCard item={top_rated?.results} path={"top_rated"} type={"movies"} />
      <NavLink className="navlinkPath" to={`/movies/upcoming`}>  Upcoming Movies</NavLink>
      <SwiperCard item={upcoming?.results} path={"upcoming"} type={"movies"} />
      <NavLink className="navlinkPath" to={`/movies/popular`}> Popular Movies</NavLink>
      <SwiperCard item={popular.results} path={"popular"} type={"movies"} />
      <NavLink className="navlinkPath" to={`/movies/now_playing`}> Now Playing Movies</NavLink>
      <SwiperCard item={now_playing?.results} path={"now_playing"} type={"movies"} />
    </>
  );
};

export default MoviesAllSlider;
