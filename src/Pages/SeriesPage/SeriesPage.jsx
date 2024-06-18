import React, { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
// import "./moviesPage.scss";
import { selectTv } from "../../store/TV/TVSlice";
import SeriesAllSlider from "../../Components/SeriesAllSlider/SeriesAllSlider";
import { fetchAllMovies } from "../../store/Movies/API";
import { Outlet } from "react-router-dom";

const MoviesPage = memo(() => {
  const { airing_today, popular, top_rated, on_the_air } =
    useSelector(selectTv);
    const dispatch =useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllMovies({ property: "airing_today", page: 1 }));
      await dispatch(fetchAllMovies({ property: "popular", page: 1 }));
      await dispatch(fetchAllMovies({ property: "top_rated", page: 1 }));
      await dispatch(fetchAllMovies({ property: "on_the_air", page: 1 }));
    };
    getData();
  });
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
