import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../../URL/URL";
import { fetchMoviesPopular } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";

const Slider = () => {
  const { popular } = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesPopular());
  }, []);

  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {popular?.length > 0 &&
        popular.map((mov) => {
          return (
            <SwiperSlide key={mov.id}>
              <img src={`${IMG_URL}${mov.backdrop_path}`} alt="" />
              <h2>{mov.title} </h2>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
