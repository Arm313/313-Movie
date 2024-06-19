import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectTv } from "../../store/TV/TVSlice";
import SwiperCard from "../SwiperCard/SwiperCard";

const SeriesAllSlider = () => {
  const { airing_today, on_the_air, popular, top_rated } =
    useSelector(selectTv);
  return (
    <>
      <NavLink className="navlinkPath" to="/series/top_rated">
        {" "}
        TV Top Rated
      </NavLink>
      <SwiperCard
        item={top_rated?.results}
        path={"top_rated"}
        type={"series"}
      />
      <NavLink className="navlinkPath" to="/series/airingt_today">
        {" "}
        TV Airing Today
      </NavLink>
      <SwiperCard
        item={airing_today?.results}
        path={"airingt_today"}
        type={"series"}
      />
      <NavLink className="navlinkPath" to="/series/popular">
        {" "}
        TV Popular
      </NavLink>
      <SwiperCard item={popular?.results} path={"popular"} type={"series"} />
      <NavLink className="navlinkPath" to="/series/on_the_air">
        {" "}
        TV On The Air
      </NavLink>
      <SwiperCard
        item={on_the_air?.results}
        path={"on_the_air"}
        type={"series"}
      />
    </>
  );
};

export default SeriesAllSlider;
