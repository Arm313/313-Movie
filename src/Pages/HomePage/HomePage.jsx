import React from "react";
import Slider from "../../Components/Swiper/Slider";
import "./homepage.scss";
import MoviesAllSlider from "../../Components/MoviesAllSlider/MoviesAllSlider";
import SeriesAllSlider from "../../Components/SeriesAllSlider/SeriesAllSlider";

const HomePage = () => {
  return (
    <div className="homepage">
      <Slider />
      <div className="homepage_container maxWidth">
        <div className="homepage_container_movies">
          <MoviesAllSlider />
          <SeriesAllSlider />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
