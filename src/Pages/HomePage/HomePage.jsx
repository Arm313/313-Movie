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

const HomePage = () => {
  const dispatch = useDispatch();
  const { nowPlaying, popular, topRated, upcoming } = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMoviesNowPlaying());
    dispatch(fetchMoviesTopRated());
    dispatch(fetchMoviesUpcoming());
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
