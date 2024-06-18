import React from "react";
import { useSelector } from "react-redux";
import { selectTv } from "../../store/TV/TVSlice";
import SwiperCard from "../SwiperCard/SwiperCard";

const SeriesAllSlider = () => {
  const { airing_today, on_the_air, popular, top_rated } = useSelector(selectTv);
  return (
    <>
      <h2> TV Top Rated</h2>
      <SwiperCard item={top_rated?.results} path={"top_rated_tv"} type={"series"} />
      <h2> TV Airing Today</h2>
      <SwiperCard item={airing_today?.results} path={"airingt_today"} type={"series"} />
      <h2> TV Popular</h2>
      <SwiperCard item={popular?.results} path={"popular_tv"} type={"series"} />
      <h2> TV On The Air</h2>
      <SwiperCard item={on_the_air?.results} path={"on_the_air"} type={"series"} />
    </>
  );
};

export default SeriesAllSlider;
