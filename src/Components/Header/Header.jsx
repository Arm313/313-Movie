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
  const { moviesGenres, tvGenres } = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGetMoviesGenres());
    dispatch(fetchGetTVGenres());
  }, []);

  return (
    <div className="header maxWidth">
      <div className="header_left">
        <NavLink to="/" className="header_left_logo">
          313
        </NavLink>
        <div className="header_left_navbar">
          <NavLink to="/movies" className="header_left_navbar_item">
            Movies
          </NavLink>
          <NavBarShowBox item={moviesGenres} />
          <NavLink to="/series" className="header_left_navbar_item">
            Series
          </NavLink>
          <NavBarShowBox item={tvGenres} />

          <NavLink to="/persons" className="header_left_navbar_item">
            Persons
          </NavLink>
        </div>
      </div>
      <div className="header_rigth">
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
