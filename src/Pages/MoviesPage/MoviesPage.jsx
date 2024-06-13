import React, { memo, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MoviesAllSlider from "../../Components/MoviesAllSlider/MoviesAllSlider";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
import { selectMovies } from "../../store/Movies/moviesSlice";
import "./moviesPage.scss";
import SeriesAllSlider from "../../Components/SeriesAllSlider/SeriesAllSlider";
import { selectTv } from "../../store/TV/TVSlice";

const MoviesPage = memo(() => {
  const { nowPlaying, popular, topRated, upcoming } = useSelector(selectMovies);
  const { airingToday, onTheAir, popularTV, topRatedTV } =
    useSelector(selectTv);

  const allMovies = [...nowPlaying, ...popular, ...topRated, ...upcoming];

  const { state } = useLocation();

  const uniqueAllSeries = useMemo(() => {
    const allSeries = [
      ...airingToday,
      ...onTheAir,
      ...popularTV,
      ...topRatedTV,
    ];

    const uniqueSeriesArray = allSeries.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

    return uniqueSeriesArray;
  }, [airingToday, onTheAir, popularTV, topRatedTV]);

  const uniqueAllMovies = useMemo(() => {
    const allMovies = [
      ...nowPlaying,
      ...popular,
      ...topRated,
      ...upcoming,
      ...airingToday,
      ...onTheAir,
      ...popularTV,
      ...topRatedTV,
    ];

    const uniqueMoviesArray = allMovies.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

    return uniqueMoviesArray;
  }, [
    nowPlaying,
    popular,
    topRated,
    upcoming,
    airingToday,
    onTheAir,
    popularTV,
    topRatedTV,
  ]);
  return (
    <div className="moviesPage maxWidth">
      {state?.name ? (
        <>
          <h1> Series Watch Online</h1>
          <div className="moviesPage_allMovies">
            <h2> All Series</h2>
            <SwiperCard item={uniqueAllSeries} path={`all-series`} />
          </div>
          <SeriesAllSlider
            airingToday={airingToday}
            onTheAir={onTheAir}
            popularTV={popularTV}
            topRatedTV={topRatedTV}
          />
        </>
      ) : (
        <>
          <h1> Movies Watch Online</h1>
          <div className="moviesPage_allMovies">
            <h2> All Movies</h2>
            <SwiperCard item={uniqueAllMovies} path={`all-series`} />
          </div>

          <MoviesAllSlider
            topRated={topRated}
            upcoming={upcoming}
            popular={popular}
            nowPlaying={nowPlaying}
          />
        </>
      )}
      {/* <h1> {state?.name ? "Series" : "Movies"} Watch Online</h1>
      <div className="moviesPage_allMovies">
        <h2> All {state?.name ? "Series" : "Movies"}</h2>
        <SwiperCard item={allMovies} path={`all-movies`} />
      </div>

      {state?.name ? (
        <SeriesAllSlider
          airingToday={airingToday}
          onTheAir={onTheAir}
          popularTV={popularTV}
          topRatedTV={topRatedTV}
        />
      ) : (
        <MoviesAllSlider
          topRated={topRated}
          upcoming={upcoming}
          popular={popular}
          nowPlaying={nowPlaying}
        />
      )} */}
    </div>
  );
});

export default MoviesPage;
