import React, { useEffect } from "react";
import "./watchSerie.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SwiperCard from "../SwiperCard/SwiperCard";
import SwiperActors from "../SwiperActors/SwiperActors";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import { fetchGetSeries } from "../../store/TV/API";
import { selectTv } from "../../store/TV/TVSlice";
import WatchTvSeries from "./WatchTvSeries/WatchTvSeries";

const WatchSerie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { watch_tv, isLoading, error } = useSelector(selectTv);
  const { similar, recommendations, credits } = watch_tv;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchGetSeries({ id })),
          dispatch(fetchGetSeries({ id, property: "videos" })),
          dispatch(fetchGetSeries({ id, property: "similar" })),
          dispatch(fetchGetSeries({ id, property: "recommendations" })),
          dispatch(fetchGetSeries({ id, property: "credits" })),
        ]);
        // All fetches are done here
      } catch (error) {
        // Handle any errors here
        console.error("Failed to fetch movie data", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  // if (isLoading) {
  //   return <div className="loading">Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="watch maxWidth">
      <WatchTvSeries />
      {similar?.results?.length > 0 && (
        <div className="watch_similar">
          <h2>Similar Movies</h2>
          <SwiperCard item={similar?.results} path="similar-movie" />
        </div>
      )}
      {recommendations?.results?.length > 0 && (
        <div className="watch_similar">
          <h2>Recommendations Movies</h2>
          <SwiperCard item={recommendations?.results} path="similar-movie" />
        </div>
      )}

      {credits?.cast?.length > 0 && (
        <div className="watch_similar">
          <h2>Movie Cast</h2>
          <SwiperActors actors={credits?.cast} path="similar-movie" />
        </div>
      )}
    </div>
  );
};

export default WatchSerie;
