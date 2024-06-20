import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilterData } from "../../store/Movies/API";
import "./filter.scss";
import ForGenresFilter from "./ForGenresFilter/ForGenresFilter";

const Filter = memo(({ genres }) => {
  const [with_genres, setWith_genres] = useState([]);
  const [primary_release_year, setPrimary_release_year] = useState();
  const with_rating = [];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      with_genres,
      primary_release_year,
      with_rating,
    };

    const {
      year: { value: year },
    } = e.target;

    const queryParams = new URLSearchParams();

    if (with_genres.length > 0) {
      queryParams.append("with_genres", with_genres);
    }

    if (year) {
      queryParams.append("primary_release_year", year);
    }
    queryParams.append("page", 1);
    let queryString = queryParams.toString();

    navigate(`/filter/&${queryString}`);
  };

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <ForGenresFilter
        genres={genres}
        setWith_genres={setWith_genres}
        with_genres={with_genres}
      />
      <input
        type="text"
        placeholder="Year"
        name="year"
        className="year"
        maxLength={4}
      />
      <button className="btn">Search</button>
    </form>
  );
});

export default Filter;
