import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import "./swiperCard.scss";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Card from "../Card/Card";

const SwiperCard = ({ item }) => {
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
        <div className="seeAll">See All</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCard;
