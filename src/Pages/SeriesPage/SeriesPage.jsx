import React, { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
import { selectTv } from "../../store/TV/TVSlice";
import SeriesAllSlider from "../../Components/SeriesAllSlider/SeriesAllSlider";
import { fetchAllMovies } from "../../store/Movies/API";
import { Outlet } from "react-router-dom";
import { fetchAllSeries } from "../../store/TV/API";

const MoviesPage = memo(() => {
  const { airing_today, popular, top_rated, on_the_air } =
    useSelector(selectTv);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllSeries({ property: "airing_today", page: 1 }));
      await dispatch(fetchAllSeries({ property: "popular", page: 1 }));
      await dispatch(fetchAllSeries({ property: "top_rated", page: 1 }));
      await dispatch(fetchAllSeries({ property: "on_the_air", page: 1 }));
    };
    getData();
  }, []);
  return (
    <div className="moviesPage maxWidth">
      <SeriesAllSlider
        airing_today={airing_today?.results}
        on_the_air={on_the_air?.results}
        popularTV={popular?.resultsr}
        topRatedTV={top_rated?.results}
      />
      <Outlet />
    </div>
  );
});

export default MoviesPage;
