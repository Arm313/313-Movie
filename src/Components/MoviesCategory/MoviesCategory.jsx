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
  const { nowPlaying, popular, topRated, upcoming } = useSelector(selectMovies);
  const { airingToday, onTheAir, popularTV, topRatedTV } =
    useSelector(selectTv);

  useEffect(() => {
    ScrollTop();
  }, []);

//   const allSerias = [...airingToday, ...onTheAir, ...popularTV, ...topRatedTV];
  //   const allMovies = [...nowPlaying, ...popular, ...topRated, ...upcoming];
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

  const pathToDataMap = {
    "now-playing": nowPlaying,
    popular: popular,
    "top-rated": topRated,
    upcoming: upcoming,
    "all-movies": uniqueAllMovies,
    "top-rated-tv": airingToday,
    "airingt-today": onTheAir,
    "popular-tv": popularTV,
    "on-the-air": topRatedTV,
    "all-series": uniqueAllSeries,
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
