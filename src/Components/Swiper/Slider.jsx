import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../../URL/URL";
import { fetchAllMovies, fetchMoviestop_rated } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";
import noImage from "../../utils/notposterImage.jpg";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getSliderMovies = async () => {
      await dispatch(fetchAllMovies({ property: "top_rated", page: 40 }));
    };

    getSliderMovies();
  }, []);
  const { top_rated } = useSelector(selectMovies);

  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="bannerSwiper"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {top_rated?.results?.length > 0 &&
        top_rated?.results.map((mov) => {
          const image = mov.backdrop_path
            ? `${IMG_URL}${mov.backdrop_path}`
            : noImage;
          return (
            <SwiperSlide key={mov.id}>
              <NavLink to={`/watch/${mov.id}`}>
                <img src={image} alt="" />
                <h2>{mov.title} </h2>
              </NavLink>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
