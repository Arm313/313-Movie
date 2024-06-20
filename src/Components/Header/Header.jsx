import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { moviesGenres, tvGenres } = useSelector(selectGenres);
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(fetchGetMoviesGenres());
    dispatch(fetchGetTVGenres());
  }, []);

  const navlink_series = () => {
    navigate("/series", { state: { name: "series" } });
  };

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
          <NavBarShowBox item={moviesGenres} page="Movies" />
          <div onClick={navlink_series} className="header_left_navbar_item">
            Series
          </div>
          <NavBarShowBox item={tvGenres} page="Series" />

          {/* <NavLink to="/persons" className="header_left_navbar_item">
            Persons
          </NavLink> */}
        </div>
      </div>
      <div className="header_rigth">
        <div className="header_rigth_search" onClick={() => {setShow(!show)}}>
          <IoSearch size="20px" />
          <span>Search</span>
          <div className={`moviesOrSeries ${show && "show"}`}>
            <NavLink to="/search-movies">Movies</NavLink>
            <NavLink to="search-series">Series</NavLink>
          </div>
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
