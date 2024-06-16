import React from "react";
import { useSelector } from "react-redux";
import { selectTv } from "../../../store/TV/TVSlice";
import { IMG_URL } from "../../../URL/URL";
import Loader from "../../Loader/Loader";
import SerieDescription from "../SerieDescription/SerieDescription";
import noImage from "../../../utils/notposterImage.jpg";
const WatchTvSeries = () => {
  const { watch_tv, isLoading } = useSelector(selectTv);
  const { videos, production_companies, name } = watch_tv;
  // if (!watch_tv || !videos) return <Loader />;
  const findMovie = videos?.results?.find((i) => i?.type === "Trailer");

  return (
    <div className="watch_movie">
      <div className="watch_movie_left">
        <div className="watch_movie_left_video">
          {findMovie ? (
            <iframe
              src={`https://www.youtube.com/embed/${findMovie?.key}`}
              title={name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={noImage} alt="" />
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
