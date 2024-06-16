import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { selectGenres } from "../../store/GENRES/genresSlice";
import Card from "../Card/Card";

const MoviesInGenres = () => {
  const { moviesInGenre } = useSelector(selectGenres);
  const { genre } = useParams();
  const { results } = moviesInGenre;
  return (
    <div className="moviesCategory maxWidth">
      {results?.length > 0 && <h1>{genre}</h1>}
      <div className="moviesCategory_data">
        {results?.length > 0 ? (
          results.map((i) => {
            return <Card key={i.id} item={i} />;
          })
        ) : (
          <h1>Please Choose Genres</h1>
        )}
      </div>
    </div>
  );
};

export default MoviesInGenres;
