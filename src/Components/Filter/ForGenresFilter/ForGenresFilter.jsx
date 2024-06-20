import React, { useState } from "react";

const ForGenresFilter = ({ genres, setWith_genres,with_genres }) => {
  const [showGenres, setShowGenres] = useState(false);

  const handleCheckboxChange = (e, genreId) => {
    if (e.target.checked) {
      setWith_genres([...with_genres, genreId]);
    } else {
      setWith_genres(with_genres.filter((id) => id !== genreId));
    }
  };

  return (
    <div className="forGenres" onClick={() => setShowGenres((prev) => !prev)}>
      <span>Genres</span>{" "}
      <i
        className="fa-solid fa-angle-up"
        style={{
          transform: !showGenres ? "rotate(180deg)" : "rotate(0deg)",
        }}
      ></i>
      {/* {showGenres && ( */}
      <div className={`genresSelect ${showGenres && "vis"}`}>
        {genres?.length > 0 &&
          genres.map((genre) => (
            <label
              key={genre.id}
              className="genre"
              onClick={(e) => e.stopPropagation()} // Prevent label click event
            >
              {genre.name}

              <input
                onChange={(e) => handleCheckboxChange(e, genre.id)}
                type="checkbox"
                name={genre.name}
                checked={with_genres.includes(genre.id)}
              />
              <svg viewBox="0 0 64 64">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default ForGenresFilter;
