import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IMG_URL } from "../../URL/URL";
import "./card.scss";
import noImage from "../../utils/no-image.png";
import { Skeleton } from "@mui/material";

const Card = ({ item }) => {
  let title = "Unknow ";
  if (item?.original_title?.length > 19) {
    title = item.original_title.slice(0, 18) + "...";
  } else if (item?.original_title) {
    title = item.original_title;
  } else if (item?.original_name?.length > 19) {
    title = item.original_name.slice(0, 19) + "...";
  } else {
    title = item.original_name;
  }

  let rating = Math.ceil(item?.vote_average * 10);
  let date = item?.release_date || item?.first_air_date;

  const image = item?.poster_path ? `${IMG_URL}${item?.poster_path}` : noImage;

  const navigate = useNavigate();
  const watchMovie = () => {
    navigate(`/${item?.original_title ? "watch" : "watchtv"}/${item.id}`);
  };

  return (
    <div onClick={watchMovie} className="card">
      <div className="card_hover">
        <h3>WATCH</h3>
        <div className="card_hover_rating">{rating}%</div>
        <div className="card_hover_date">{date}</div>
      </div>
      <div className="card_image">
        {image ? (
          <img src={image} alt="image" />
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={"100%"}
            height={"100%"}
          />
        )}
      </div>
      <h5>{title}</h5>
      <span>Бесплатно</span>
    </div>
  );
};

export default Card;
