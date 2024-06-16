import React from "react";
import { IMG_URL } from "../../URL/URL";
import "./actorCard.scss";
import noImage from "../../utils/no-image.png";

const ActorCard = ({ actor }) => {
  const image = actor?.profile_path
    ? `${IMG_URL}${actor?.profile_path}`
    : noImage;
  return (
    <div className="actorCard">
      <div className="actorCard_image">
        <img src={image} alt="" />
      </div>

      <h5 className="actorCard_name">{actor.name}</h5>
      <span>{actor?.character} </span>
    </div>
  );
};

export default ActorCard;
