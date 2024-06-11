import React from "react";
import { IMG_URL } from "../../URL/URL";
import "./card.scss";



const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={`${IMG_URL}${item.poster_path}`} alt="" />
      </div>
      <h5>{item.original_title}</h5>
      <span>Бесплатно</span>
    </div>
  );
};

export default Card;
