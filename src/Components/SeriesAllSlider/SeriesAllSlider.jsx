import React from "react";
import { useSelector } from "react-redux";
import { selectTv } from "../../store/TV/TVSlice";
import SwiperCard from "../SwiperCard/SwiperCard";

const SeriesAllSlider = () => {
  const { airing_today, on_the_air, popular, top_rated } = useSelector(selectTv);
  return (
    <>
      <h2> TV Top Rated</h2>
      <SwiperCard item={top_rated} path={"top-rated-tv"} />
      <h2> TV Airing Today</h2>
      <SwiperCard item={airing_today} path={"airingt-today"} />
      <h2> TV Popular</h2>
      <SwiperCard item={popular} path={"popular-tv"} />
      <h2> TV On The Air</h2>
      <SwiperCard item={on_the_air} path={"on-the-air"} />
    </>
  );
};

export default SeriesAllSlider;
