import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectGenres } from '../../store/GENRES/genresSlice';
import Card from '../Card/Card';

const SeriesInGenres = () => {

    const { seriesInGenre } = useSelector(selectGenres);
    const { genre } = useParams();
    const { results } = seriesInGenre;
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
  )
}

export default SeriesInGenres