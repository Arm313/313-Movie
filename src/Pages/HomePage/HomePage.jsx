import React from "react";
import { useSelector } from "react-redux";
import Slider from "../../Components/Swiper/Slider";
import { selectMovies } from "../../store/Movies/moviesSlice";
import "./homepage.scss";
import { selectTv } from "../../store/TV/TVSlice";
import MoviesAllSlider from "../../Components/MoviesAllSlider/MoviesAllSlider";
import SeriesAllSlider from "../../Components/SeriesAllSlider/SeriesAllSlider";

const HomePage = () => {
  const { nowPlaying, popular, topRated, upcoming } = useSelector(selectMovies);
  const { airingToday, onTheAir, popularTV, topRatedTV } =
    useSelector(selectTv);

  return (
    <div className="homepage">
      <Slider />
      <div className="homepage_container maxWidth">
        <div className="homepage_container_movies">
          <MoviesAllSlider
            topRated={topRated}
            upcoming={upcoming}
            popular={popular}
            nowPlaying={nowPlaying}
          />
          <SeriesAllSlider
            airingToday={airingToday}
            onTheAir={onTheAir}
            popularTV={popularTV}
            topRatedTV={topRatedTV}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
