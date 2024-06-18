import React, { useEffect, useState } from "react";
import "./watch.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGetMovie } from "../../store/Movies/API";
import { selectMovies, setLoading } from "../../store/Movies/moviesSlice";
import SwiperCard from "../SwiperCard/SwiperCard";
import WatchMovie from "./WatchMovie/WatchMovie";
import SwiperActors from "../SwiperActors/SwiperActors";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import Loader from "../Loader/Loader";

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { watch, isLoading, error } = useSelector(selectMovies);
  const { similar, recommendations, credits } = watch;

  useEffect(() => {
    ScrollTop();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        await dispatch(fetchGetMovie({ id }));
        await dispatch(fetchGetMovie({ id, property: "videos" }));
        await dispatch(fetchGetMovie({ id, property: "similar" }));
        await dispatch(fetchGetMovie({ id, property: "recommendations" }));
        await dispatch(fetchGetMovie({ id, property: "credits" }));
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  if (isLoading) return <Loader />;
  

  return (
    <div className="watch maxWidth">
      <WatchMovie />
      {similar?.results?.length > 0 && (
        <div className="watch_similar">
          <h2>Similar Movies</h2>
          <SwiperCard item={similar?.results} path="similar" type={"movies"}  itemId={id} />
        </div>
      )}
      {recommendations?.results?.length > 0 && (
        <div className="watch_similar">
          <h2>Recommendations Movies</h2>
          <SwiperCard item={recommendations?.results} path="recommendations" type={"movies"} itemId={id} />
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

export default Watch;
