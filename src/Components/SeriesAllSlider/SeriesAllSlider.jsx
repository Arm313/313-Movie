import React from "react";
import SwiperCard from "../SwiperCard/SwiperCard";

const SeriesAllSlider = ({ airingToday, onTheAir, popularTV, topRatedTV }) => {
  return (
    <>
      <h2> TV Top Rated</h2>
      <SwiperCard item={topRatedTV} path={"top-rated-tv"} />
      <h2> TV Airing Today</h2>
      <SwiperCard item={airingToday} path={"airingt-today"} />
      <h2> TV Popular</h2>
      <SwiperCard item={popularTV} path={"popular-tv"} />
      <h2> TV On The Air</h2>
      <SwiperCard item={onTheAir} path={"on-the-air"} />
    </>
  );
};

export default SeriesAllSlider;
