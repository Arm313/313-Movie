import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import { selectTv } from "../../store/TV/TVSlice";
import Card from "../Card/Card";
import PaginationSeries from "../PaginationSeries/PaginationSeries";

const SeriesCategory = () => {
  const { path } = useParams();
  const { airing_today, popular, top_rated, on_the_air, wacth_tv, pages } =
    useSelector(selectTv);
  useEffect(() => {
    ScrollTop();
  }, []);

  const pathToDataMap = {
    top_rated: top_rated,
    airingt_today: airing_today,
    popular: popular,
    on_the_air: on_the_air,
    similar: wacth_tv?.similar,
    recommendations: wacth_tv?.recommendations
  };

  const pageName = path.replaceAll("_", " ").toUpperCase();
  const data = pathToDataMap[path]?.results || [];
  const { page, total_pages } = pathToDataMap[path] || 1;

  return (
    <div className="moviesCategory maxWidth">
      <h1>{pageName}</h1>

      <div className="moviesCategory_data">
        {data?.length > 0 &&
          data.map((i) => {
            return <Card key={i.id} item={i} />;
          })}
      </div>
      <PaginationSeries page={page} total_pages={total_pages} path={path} />
    </div>
  );
};

export default SeriesCategory;
