import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../../store/Movies/moviesSlice";

const MovieDescription = () => {
  const { watch } = useSelector(selectMovies);
  const {
    title,
    runtime,
    release_date,
    origin_country,
    genres,
    vote_average,
    vote_count,
    budget,
    revenue,
    overview,
  } = watch;

  const formatMovieRuntime = (runtimeInMinutes) => {
    const hours = Math.floor(runtimeInMinutes / 60);
    const minutes = runtimeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const movieYear = release_date?.split("-")[0];
  const rating = Math.ceil(vote_average * 10);
  return (
    <div className="watch_movie_description">
      <h1> {title} </h1>
      <div className="watch_movie_description_runtime">
        <span>{formatMovieRuntime(runtime)}</span>
        <span>{movieYear}</span>
      </div>
      <div className="watch_movie_description_genres">
        <span>{origin_country} - </span>
        {genres?.length > 0 &&
          genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
      </div>

      <div className="watch_movie_description_rating_and_vote">
        <div className="watch_movie_description_rating_and_vote_rating">
          <span>{rating}</span> <p>Rating</p>
        </div>
        <div className="watch_movie_description_rating_and_vote_vote">
          <span>{vote_count}</span> <p>Vote</p>
        </div>
      </div>
      <div className="watch_movie_description_overview">{overview}</div>
      <div className="watch_movie_description_revenue_budget">
        <div className="watch_movie_description_revenue_budget_budget">
          <span>{budget} $</span> <p>Budget</p>
        </div>
        <div className="watch_movie_description_revenue_budget_revenue">
          <span>{revenue} $</span> <p>Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
