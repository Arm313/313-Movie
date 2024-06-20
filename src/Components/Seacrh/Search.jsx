import React, { memo, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";
import { fetchSearchSeries } from "../../store/TV/API";
import { selectTv } from "../../store/TV/TVSlice";
import Card from "../Card/Card";
import "./search.scss";

const Search = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { searchData } = useSelector(selectMovies);
  const { searchSeriesData } = useSelector(selectTv);
  const { pathname } = useLocation();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      if (searchTerm.trim() !== "" && searchTerm.trim()?.length > 2) {
        pathname === "/search-movies"
          ? await dispatch(fetchSearchMovies({ query: searchTerm }))
          : await dispatch(fetchSearchSeries({ query: searchTerm }));
      }
    };

    fetchSearchData();
  }, [searchTerm, dispatch]);
  const data = pathname === "/search-movies" ? searchData : searchSeriesData;

  return (
    <div className="searchPage maxWidth">
      <h1>Search Page</h1>
      <div className="searchPage_query">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="searchPage_result">
        {data?.results?.length > 0 ? (
          data?.results?.map((movie) => {
            return <Card item={movie} key={movie.id} />;
          })
        ) : (
          <h2>No Results Found</h2>
        )}
      </div>
    </div>
  );
});

export default Search;
