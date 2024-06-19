import React from "react";
import { useSelector } from "react-redux";
import { selectTv } from "../../../store/TV/TVSlice";

const SerieDescription = () => {
  const { watch_tv } = useSelector(selectTv);
  const {
    name,
    release_date,
    origin_country,
    genres,
    vote_average,
    vote_count,
    budget,
    revenue,
    overview,
    first_air_date,
    last_air_date,
    episode_run_time,
    number_of_seasons,
    number_of_episodes,
  } = watch_tv;

  const firstDate = first_air_date?.split("-")[0];
  const lastDate = last_air_date?.split("-")[0];
  const rating = Math.ceil(vote_average * 10);
  return (
    <div className="watch_movie_description">
      <h1> {name} </h1>
      <div
        className="watch_movie_description_runtime"
        style={{
          flexDirection: "column",
        }}
      >
        {firstDate && <span> First Air Date - {firstDate}</span>}
        {lastDate && <span> Last Air Date - {lastDate}</span>}
        {number_of_seasons && (
          <span> Number Of Seasons - {number_of_seasons}</span>
        )}
        {number_of_episodes && (
          <span> Number Of Episodes - {number_of_episodes}</span>
        )}
        {episode_run_time && (
          <span>Episode Run Time - {episode_run_time[0]} min</span>
        )}
      </div>
      <div className="watch_movie_description_genres">
        <span>{origin_country} - </span>
        {genres?.length > 0 &&
          genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
      </div>

      <div className="watch_movie_description_rating_and_vote">
        <div className="watch_movie_description_rating_and_vote_rating">
          <span>{rating || ""}</span> <p>Rating</p>
        </div>
        <div className="watch_movie_description_rating_and_vote_vote">
          <span>{vote_count}</span> <p>Vote</p>
        </div>
      </div>
      <div className="watch_movie_description_overview">{overview}</div>
      <div className="watch_movie_description_revenue_budget">
        <div className="watch_movie_description_revenue_budget_budget">
          {budget && (
            <p>
              {" "}
              <span>{budget} $</span> Budget
            </p>
          )}
        </div>
        <div className="watch_movie_description_revenue_budget_revenue">
          {revenue && (
            <p>
              {" "}
              <span>{revenue} $</span> revenue
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SerieDescription;
