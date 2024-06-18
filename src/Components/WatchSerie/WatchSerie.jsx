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
import { setLoading, setLoadingTrue } from "../../store/Movies/moviesSlice";
import Loader from "../Loader/Loader";

const WatchSerie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { watch_tv, isLoading, error } = useSelector(selectTv);
  const { similar, recommendations, credits } = watch_tv;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        await dispatch(fetchGetSeries({ id }));
        await dispatch(fetchGetSeries({ id, property: "videos" }));
        await dispatch(fetchGetSeries({ id, property: "similar" }));
        await dispatch(fetchGetSeries({ id, property: "recommendations" }));
        await dispatch(fetchGetSeries({ id, property: "credits" }));
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [id, dispatch]);


  // if (isLoading) {
  //   return <div className="loading">Loading...</div>;
  // }


  if (isLoading) return <Loader />;
  


  return (
    <div className="watch maxWidth">
      <WatchTvSeries />
      {similar?.results?.length > 0 && (
        <div className="watch_similar">
          <h2>Similar Movies</h2>
          <SwiperCard item={similar?.results} path="similar" type={"series"} />
        </div>
      )}
      {recommendations?.results?.length > 0 && (
        <div className="watch_similar">
          <h2>Recommendations Movies</h2>
          <SwiperCard item={recommendations?.results} path="recommendations" type={"series"} />
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
