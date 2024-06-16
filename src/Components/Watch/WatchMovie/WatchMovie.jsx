import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../../store/Movies/moviesSlice";
import { IMG_URL } from "../../../URL/URL";
import Loader from "../../Loader/Loader";
import MovieDescription from "../MovieDescription/MovieDescription";

const WatchMovie = () => {
  const { watch, isLoading } = useSelector(selectMovies);
  const { videos, production_companies, title } = watch;
  const findMovie = videos?.results?.find((i) => i?.type === "Trailer");
  
  // if (!watch || !videos) return <Loader />;
  return (
    <div className="watch_movie">
      <div className="watch_movie_left">
        <div className="watch_movie_left_video">
          <iframe
            src={`https://www.youtube.com/embed/${findMovie?.key}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="watch_movie_left_companies">
          {production_companies?.map((comp) => {
            return (
              <div
                key={comp?.id}
                className="watch_movie_left_companies_company"
              >
                <div className="watch_movie_left_companies_company_logo">
                  <img
                    src={`${IMG_URL}${comp?.logo_path}`}
                    alt={comp?.name}
                    title={comp?.name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <MovieDescription />
    </div>
  );
};

export default WatchMovie;
