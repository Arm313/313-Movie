import React, { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesAllSlider from "../../Components/MoviesAllSlider/MoviesAllSlider";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
import { selectMovies } from "../../store/Movies/moviesSlice";
import "./moviesPage.scss";
import { Outlet, useParams } from "react-router-dom";
import { fetchAllMovies } from "../../store/Movies/API";

const MoviesPage = memo(() => {
  const { now_playing, popular, top_rated, upcoming } =
    useSelector(selectMovies);
  const { path } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllMovies({ property: "now_playing", page: 1 }));
      await dispatch(fetchAllMovies({ property: "popular", page: 1 }));
      await dispatch(fetchAllMovies({ property: "top_rated", page: 1 }));
      await dispatch(fetchAllMovies({ property: "upcoming", page: 1 }));
    };
    getData();
  });

  return (
    <div className="moviesPage maxWidth">
      <MoviesAllSlider
        top_rated={top_rated?.results}
        upcoming={upcoming?.results}
        popular={popular?.results}
        now_playing={now_playing?.results}
      />
      <Outlet />
    </div>
  );
});

export default MoviesPage;
