import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";
import PaginationFilter from "../../Components/PaginationFilter/PaginationFilter";
import { selectGenres } from "../../store/GENRES/genresSlice";
import { fetchFilterData } from "../../store/Movies/API";
import { selectMovies } from "../../store/Movies/moviesSlice";

const FilterPage = memo(() => {
  const { filterData, isLoading } = useSelector(selectMovies);
  const { genres } = useSelector(selectGenres);
  const dispatch = useDispatch();
  const { path } = useParams();
  // console.log('path:', path.split("&")[1].split("=")[1].split(","))

  const { results, page, total_pages } = filterData;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const getFilterData = async () => {
      await dispatch(fetchFilterData({ path }));
    };
    getFilterData();
  }, []);

  // let params = new URLSearchParams(path);
  // let genres1 = params.get("with_genres");
  // let genresArray = genres1.split(",");

  if (isLoading) return <Loader />;

  return (
    <div className="moviesCategory maxWidth">
      <div className="moviesCategory_data">
        {results?.length > 0 &&
          results.map((i) => {
            return <Card key={i.id} item={i} />;
          })}
      </div>
      <PaginationFilter page={page} total_pages={total_pages} path={path} />
    </div>
  );
});

export default FilterPage;
