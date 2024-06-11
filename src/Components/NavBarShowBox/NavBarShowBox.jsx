import React from "react";

const NavBarShowBox = ({ item }) => {
  return (
    <div className="header_left_navbar_item_showBox">
      <h3>GENRES</h3>
      {item?.length > 0 &&
        item.map((genre, idx) => {
          return (
            <div className="genre" key={genre.id}>
              {`${idx + 1}. ${genre?.name}`}
            </div>
          );
        })}
    </div>
  );
};

export default NavBarShowBox;
