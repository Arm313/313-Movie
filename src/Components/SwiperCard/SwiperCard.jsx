import React, { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperCard.scss";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const SwiperCard =memo( ({ item, path }) => {
  
  const fifteenPieces = item?.slice(0, 15);
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={40}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {fifteenPieces?.length > 0 &&
        fifteenPieces.map((mov, i) => {
          return (
            <SwiperSlide key={mov.id}>
              <Card item={mov} />
            </SwiperSlide>
          );
        })}
      <SwiperSlide>
        <NavLink to={`/movies/${path}`} className="seeAll" >See All</NavLink>
      </SwiperSlide>
    </Swiper>
  );
});

export default SwiperCard;
