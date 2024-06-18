import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../store/Movies/moviesSlice";
import SwiperCard from "../SwiperCard/SwiperCard";
import "./MoviesAllSlider.scss";

const MoviesAllSlider = () => {
  const { now_playing, popular, top_rated, upcoming } =
    useSelector(selectMovies);
  return (
    <>
      <h2> Top Rated Movies</h2>
      <SwiperCard item={top_rated?.results} path={"top_rated"} type={"movies"} />
      <h2> Upcoming Movies</h2>
      <SwiperCard item={upcoming?.results} path={"upcoming"} type={"movies"} />
      <h2> Popular Movies</h2>
      <SwiperCard item={popular.results} path={"popular"} type={"movies"} />
      <h2> Now Playing Movies</h2>
      <SwiperCard item={now_playing?.results} path={"now_playing"} type={"movies"} />
    </>
  );
};

export default MoviesAllSlider;
