import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../Components/Swiper/Slider";
import {
  fetchMoviesNowPlaying,
  fetchMoviesTopRated,
  fetchMoviesUpcoming,
} from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";
import "./homepage.scss";
import SwiperCard from "../../Components/SwiperCard/SwiperCard";
import { selectTv } from "../../store/TV/TVSlice";
import {
  fetchTVAiringToday,
  fetchTVOnTheAir,
  fetchTVPopular,
  fetchTVTopRated,
} from "../../store/TV/API";

const HomePage = () => {
  const dispatch = useDispatch();
  const { nowPlaying, popular, topRated, upcoming } = useSelector(selectMovies);
  const { airingToday, onTheAir, popularTV, topRatedTV } =
    useSelector(selectTv);

  useEffect(() => {
    dispatch(fetchMoviesNowPlaying());
    dispatch(fetchMoviesTopRated());
    dispatch(fetchMoviesUpcoming());

    dispatch(fetchTVAiringToday());
    dispatch(fetchTVOnTheAir());
    dispatch(fetchTVPopular());
    dispatch(fetchTVTopRated());
  }, []);

  return (
    <div className="homepage">
      <Slider />
      <div className="homepage_container maxWidth">
        <div className="homepage_container_movies">
          <h2> Top Rated Movies</h2>
          <SwiperCard item={topRated} />
          <h2> Upcoming Movies</h2>
          <SwiperCard item={upcoming} />
          <h2> Popular Movies</h2>
          <SwiperCard item={popular} />
          <h2> Now Playing Movies</h2>
          <SwiperCard item={nowPlaying} />
          <h2> TV Top Rated</h2>
          <SwiperCard item={topRatedTV} />
          <h2> TV Airing Today</h2>
          <SwiperCard item={airingToday} />
          <h2> TV Popular</h2>
          <SwiperCard item={popularTV} />
          <h2> TV On The Air</h2>
          <SwiperCard item={onTheAir} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
