import React, { memo, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import MoviesAllSlider from "../../Components/MoviesAllSlider/MoviesAllSlider";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
import { selectMovies } from "../../store/Movies/moviesSlice";
import "./moviesPage.scss";

const MoviesPage = memo(() => {
  const { now_playing, popular, top_rated, upcoming } =
    useSelector(selectMovies);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const uniqueAllMovies = useMemo(() => {
    const allMovies = [...now_playing, ...popular, ...top_rated, ...upcoming];

    const uniqueMoviesArray = allMovies.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

    return uniqueMoviesArray;
  }, [now_playing, popular, top_rated, upcoming, ,]);
  return (
    <div className="moviesPage maxWidth">
      <h1> Movies Watch Online</h1>
      <div className="moviesPage_allMovies">
        <h2> All Movies</h2>
        <SwiperCard item={uniqueAllMovies} path={`all-series`} />
      </div>

      <MoviesAllSlider
        top_rated={top_rated}
        upcoming={upcoming}
        popular={popular}
        now_playing={now_playing}
      />
    </div>
  );
});

export default MoviesPage;
