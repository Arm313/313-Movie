import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../../URL/URL";
import { fetchAllMovies, fetchMoviesPopular } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";
import noImage from "../../utils/notposterImage.jpg";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllMovies({ property: "popular", page: 40 }));
  }, []);
  const { popular } = useSelector(selectMovies);

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
      {popular?.length > 0 &&
        popular.map((mov) => {
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
