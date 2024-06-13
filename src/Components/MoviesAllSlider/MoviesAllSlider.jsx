import React from "react";
import SwiperCard from "../SwiperCard/SwiperCard";
import "./MoviesAllSlider.scss"

const MoviesAllSlider = ({ topRated, upcoming, popular, nowPlaying }) => {
  return (
    <>
      <h2> Top Rated Movies</h2>
      <SwiperCard item={topRated} path={"top-rated"} />
      <h2> Upcoming Movies</h2>
      <SwiperCard item={upcoming} path={"upcoming"} />
      <h2> Popular Movies</h2>
      <SwiperCard item={popular} path={"popular"} />
      <h2> Now Playing Movies</h2>
      <SwiperCard item={nowPlaying} path={"now-playing"} />
    </>
  );
};

export default MoviesAllSlider;
