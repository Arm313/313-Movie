import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import Slider from "../../Components/Swiper/Slider";
import { fetchMoviesNowPlaying } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";
import { API_KEY } from "../../URL/URL";
import "./homepage.scss";

const HomePage = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { nowPlaying } = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMoviesNowPlaying());
  }, []);

  console.log("nowPlaying:", nowPlaying);
  return (
    <div className="homepage">
      <Slider />
      <div className="homepage_container maxWidth">
        <div className="homepage_container_movies">
          {nowPlaying?.length > 0 &&
            nowPlaying.map((mov, i) => {
              return <Card item={mov} key={mov.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
