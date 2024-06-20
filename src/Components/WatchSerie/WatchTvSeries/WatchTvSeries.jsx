import React from "react";
import { useSelector } from "react-redux";
import { selectTv } from "../../../store/TV/TVSlice";
import { IMG_URL } from "../../../URL/URL";
import SerieDescription from "../SerieDescription/SerieDescription";
import { Skeleton } from "@mui/material";
const WatchTvSeries = () => {
  const { watch_tv, isLoading } = useSelector(selectTv);
  const { videos, production_companies, name, seasons } = watch_tv;
  const findMovie = videos?.results?.find((i) => i?.type === "Trailer");
  return (
    <div className="watch_movie">
      <div className="watch_movie_left">
        <div className="watch_movie_left_video">
          {!isLoading ? (
            <iframe
              src={`https://www.youtube.com/embed/${findMovie?.key}`}
              title={name}
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
        <div className="seasons">
          {seasons?.length > 0 &&
            seasons?.map((s) => {
              return (
                <div key={s.id} className="seasons_item">
                  <div className="seasons_item_img">
                    <img src={IMG_URL + s.poster_path} alt={s.name} />
                  </div>
                  <h3>Season {s.season_number + 1}</h3>
                  <p>{s.episode_count} Episodes</p>
                </div>
              );
            })}
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
      <SerieDescription />
    </div>
  );
};

export default WatchTvSeries;
