import { Skeleton } from "@mui/material";
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
  if (!videos) return <Loader />;
  return (
    <div className="watch_movie">
      <div className="watch_movie_left">
        <div className="watch_movie_left_video">
          {findMovie ? (
            <iframe
              src={`https://www.youtube.com/embed/${findMovie?.key}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="skeletonDiv">
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="rectangular"
                width={"100%"}
                height={"100%"}
              />
              <div className="notVideo">this movie has no video</div>
            </div>
          )}
        </div>
        <div className="watch_movie_left_companies">
          {production_companies?.map((comp) => {
            return (
              <div
                key={comp?.id}
                className="watch_movie_left_companies_company"
              >
                <div className="watch_movie_left_companies_company_logo">
                  {comp?.logo_path ? (
                    <img
                      src={`${IMG_URL}${comp?.logo_path}`}
                      alt={comp?.name}
                      title={comp?.name}
                    />
                  ) : (
                    <div title={comp?.name}>
                      {comp?.name?.at(0).toUpperCase()}
                    </div>
                  )}
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
