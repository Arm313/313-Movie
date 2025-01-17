import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import { selectMovies } from "../../store/Movies/moviesSlice";
import Card from "../Card/Card";
import PaginationMovies from "../PaginationMovies/PaginationMovies";
import "./moviesCategory.scss";

const MoviesCategory = () => {
  const { path } = useParams();
  const { now_playing, popular, top_rated, upcoming, watch, pages } =
    useSelector(selectMovies);

  const pathToDataMap = {
    now_playing: now_playing,
    popular: popular,
    top_rated: top_rated,
    upcoming: upcoming,
    similar: watch?.similar,
    recommendations: watch?.recommendations,
  };

  const pageName = path.replaceAll("_", " ").toUpperCase();

  const data = pathToDataMap[path]?.results || [];
  const { page, total_pages } = pathToDataMap[path] || 1;

  useEffect(() => {
    ScrollTop();
  }, [page]);

  return (
    <div className="moviesCategory maxWidth">
      <h1>{pageName}</h1>
      <div className="moviesCategory_data">
        {data?.length > 0 &&
          data.map((i) => {
            return <Card key={i.id} item={i} />;
          })}
      </div>
      <PaginationMovies page={page} total_pages={total_pages} path={path} />
    </div>
  );
};

export default MoviesCategory;
