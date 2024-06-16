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
      <SwiperCard item={top_rated} path={"top-rated"} />
      <h2> Upcoming Movies</h2>
      <SwiperCard item={upcoming} path={"upcoming"} />
      <h2> Popular Movies</h2>
      <SwiperCard item={popular} path={"popular"} />
      <h2> Now Playing Movies</h2>
      <SwiperCard item={now_playing} path={"now-playing"} />
    </>
  );
};

export default MoviesAllSlider;
