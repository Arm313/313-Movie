import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ActorCard from "../ActorCard/ActorCard";
import "./swiperActors.css";

const SwiperActors = memo(({ actors, path = "" }) => {
  const fifteenPieces = actors?.slice(0, 15);
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={40}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      slidesPerGroup={6} 
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 6,
          slidesPerGroup: 5,
          spaceBetween: 40
        }
      }}
    >
      {actors?.length > 0 &&
        actors.map((actor, i) => {
          return (
            <SwiperSlide style={{height: "auto"}} key={actor.id}>
              <ActorCard actor={actor} />
            </SwiperSlide>
          );
        })}
      {/* <SwiperSlide>
        <NavLink to={`/movies/${path}`} className="seeAll">
          See All
        </NavLink>
      </SwiperSlide> */}
    </Swiper>
  );
});

export default SwiperActors;
