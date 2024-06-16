import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import { selectTv } from "../../store/TV/TVSlice";
import Card from "../Card/Card";

const SeriesCategory = () => {
  const { path } = useParams();
  const { airing_today, popular, top_rated, on_the_air, wacth_tv } =
    useSelector(selectTv);

  useEffect(() => {
    ScrollTop();
  }, []);

  const uniqueAllSeries = useMemo(() => {
    const allMovies = [
      ...airing_today,
      ...popular,
      ...top_rated,
      ...on_the_air,
    ];

    const uniqueSeriesArray = allMovies.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

    return uniqueSeriesArray;
  }, [airing_today, popular, top_rated, on_the_air]);

  const pathToDataMap = {
    "top-rated-tv": top_rated,
    "airingt-today": airing_today,
    "popular-tv": popular,
    "on-the-air": on_the_air,
    "all-series": uniqueAllSeries,
    "similar-movie": wacth_tv?.similar?.results,
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

export default SeriesCategory;
