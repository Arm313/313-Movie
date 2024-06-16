import React, { useEffect } from "react";
import "./watch.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGetMovie } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";
import SwiperCard from "../SwiperCard/SwiperCard";
import WatchMovie from "./WatchMovie/WatchMovie";
import SwiperActors from "../SwiperActors/SwiperActors";
import { ScrollTop } from "../../ScrollTop/ScrollTop";

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
        await Promise.all([
          dispatch(fetchGetMovie({ id })),
          dispatch(fetchGetMovie({ id, property: "videos" })),
          dispatch(fetchGetMovie({ id, property: "similar" })),
          dispatch(fetchGetMovie({ id, property: "recommendations" })),
          dispatch(fetchGetMovie({ id, property: "credits" })),
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

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="watch maxWidth">
      <WatchMovie />
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

export default Watch;
