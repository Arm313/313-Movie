import React from "react";
import { NavLink } from "react-router-dom";
import { IMG_URL } from "../../URL/URL";
import "./card.scss";

const Card = ({ item }) => {
  let title =
    item?.original_title?.length > 19
      ? item?.original_title?.slice(0, 18) + "..."
      : item?.original_title || item?.original_name?.length > 19
      ? item?.original_title?.slice(0, 19) + "..."
      : item?.original_name;
  let rating = Math.ceil(item?.vote_average * 10);

  let date = item?.release_date || item?.first_air_date;
  return (
    <NavLink to={`watch/${item.id}`} className="card">
      <div className="card_hover">
        <h3>WATCH</h3>
        <div className="card_hover_rating">{rating}%</div>
        <div className="card_hover_date">{date}</div>
      </div>
      <div className="card_image">
        <img src={`${IMG_URL}${item.poster_path}`} alt="" />
      </div>
      <h5>{title}</h5>
      <span>Бесплатно</span>
    </NavLink>
  );
};

export default Card;
