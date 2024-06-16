import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchMoviesInGenres,
  fetchSeriesInGenres,
} from "../../store/GENRES/API";

const NavBarShowBox = ({ item, page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickGendre = (id, name) => {
    if (page === "Movies") {
      dispatch(fetchMoviesInGenres(id));
      navigate(`/genres/${name}`);
    } else {
      dispatch(fetchSeriesInGenres(id));
      navigate(`/genres-series/${name}`);
    }
  };

  return (
    <div className="header_left_navbar_item_showBox">
      <h3> {page} GENRES </h3>
      <div className="genres">
        {item?.length > 0 &&
          item.map((genre, idx) => {
            const { id, name } = genre;
            return (
              <div
                onClick={() => clickGendre(id, name)}
                className="genre"
                key={genre.id}
              >
                {`${idx + 1}. ${genre?.name}`}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NavBarShowBox;
