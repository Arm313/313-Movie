import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import { selectMovies } from "../../store/Movies/moviesSlice";
import { selectTv } from "../../store/TV/TVSlice";
import Card from "../Card/Card";
import "./moviesCategory.scss";

const MoviesCategory = () => {
  const { path } = useParams();
  const { now_playing, popular, top_rated, upcoming, watch } =
    useSelector(selectMovies);

  useEffect(() => {
    ScrollTop();
  }, []);

  const uniqueAllMovies = useMemo(() => {
    const allMovies = [
      ...now_playing,
      ...popular,
      ...top_rated,
      ...upcoming,
    ];

    const uniqueMoviesArray = allMovies.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

    return uniqueMoviesArray;
  }, [
    now_playing,
    popular,
    top_rated,
    upcoming,
    
  ]);

  // const uniqueAllSeries = useMemo(() => {
  //   const allSeries = [
  //     ...airing_today,
  //     ...on_the_air,
  //     ...state?.popular,
  //     ...state?.top_rated,
  //     ,
  //   ];

  //   const uniqueSeriesArray = allSeries.filter(
  //     (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  //   );

  //   return uniqueSeriesArray;
  // }, [airing_today, on_the_air, state?.popular, state?.top_rated]);

  const pathToDataMap = {
    "now-playing": now_playing,
    popular: popular,
    "top-rated": top_rated,
    upcoming: upcoming,
    "all-movies": uniqueAllMovies,
    // "top-rated-tv": state?.top_rated,
    // "airingt-today": airing_today,
    // "popular-tv": popular?.popular,
    // "on-the-air": on_the_air,
    // "all-series": uniqueAllSeries,
    "similar-movie": watch?.similar?.results,
  };

  const pageName = path.replaceAll("-", " ").toUpperCase();

  const data = pathToDataMap[path] || [];
  return (
    <div className="moviesCategory maxWidth">
      <h1>{pageName}</h1>

      <div className="moviesCategory_data">
        {data?.length > 0 &&
          data.map((i) => {
            return <Card key={i.id} item={i} />;
          })}
      </div>
    </div>
  );
};

export default MoviesCategory;
