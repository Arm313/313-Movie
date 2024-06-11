import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import NavBarShowBox from "../NavBarShowBox/NavBarShowBox";
import { fetchGetMoviesGenres, fetchGetTVGenres } from "../../store/GENRES/API";
import { selectGenres } from "../../store/GENRES/genresSlice";

const Header = () => {
  const dispatch = useDispatch();
  const {moviesGenres, tvGenres} = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGetMoviesGenres());
    dispatch(fetchGetTVGenres());
  }, []);

  return (
    <div className="header maxWidth">
      <div className="header_left">
        <div className="header_left_logo">313</div>
        <div className="header_left_navbar">
          <NavLink to="/" className="header_left_navbar_item">
            Movies
          </NavLink>
          <NavBarShowBox item={moviesGenres} />
          <NavLink to="/" className="header_left_navbar_item">
            TV Series
          </NavLink>
          <NavBarShowBox item={tvGenres} />

          <NavLink to="/" className="header_left_navbar_item">
            Persons
          </NavLink>
          <div className="header_left_navbar_item_showBox">3</div>
        </div>
      </div>
      <div className="header_rigth">
        {/* <button className="header_rigth_button">
          Смотреть 30 дней бесплатно
        </button> */}
        <div className="header_rigth_search">
          <IoSearch size="20px" />
          <span>Search</span>
        </div>
        <div className="header_rigth_notifications">
          <MdOutlineNotifications size="22px" />
        </div>
        <div className="header_rigth_signIn">
          <div className="header_rigth_signIn_icon">
            <LuUser size="20px" />
          </div>
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
