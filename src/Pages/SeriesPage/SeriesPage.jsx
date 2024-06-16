import React, { memo, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
// import "./moviesPage.scss";
import { selectTv } from "../../store/TV/TVSlice";
import SeriesAllSlider from "../../Components/SeriesAllSlider/SeriesAllSlider";

const MoviesPage = memo(() => {
  const { airing_today, popular, top_rated, on_the_air } =
    useSelector(selectTv);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const uniqueAllSeries = useMemo(() => {
    const allMovies = [
      ...airing_today,
      ...popular,
      ...top_rated,
      ...on_the_air,
    ];

    const uniqueMoviesArray = allMovies.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

    return uniqueMoviesArray;
  }, [airing_today, popular, top_rated, on_the_air]);
  return (
    <div className="moviesPage maxWidth">
      <h1> Series Watch Online</h1>
      <div className="moviesPage_allMovies">
        <h2> All Series</h2>
        <SwiperCard item={uniqueAllSeries} path={`all-series`} />
      </div>
      <SeriesAllSlider
        airing_today={airing_today}
        on_the_air={on_the_air}
        popularTV={popular}
        topRatedTV={top_rated}
      />
    </div>
  );
});

export default MoviesPage;
