import { Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAllSeries } from "../../store/TV/API";
import { selectTv } from "../../store/TV/TVSlice";
import Card from "../Card/Card";

const PaginationPageSeries = () => {
  const { pages } = useSelector(selectTv);
  const navigate = useNavigate();

  const { path, page } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const getPagesData = async () => {
      await dispatch(fetchAllSeries({ property: path, page }));
    };

    getPagesData();
  }, [page]);
  const handelChangePage = async (e, value) => {
    navigate(`/series/${path}/${value}?`);
  };

  const pageName = path.replaceAll("_", " ").toUpperCase();

  return (
    <div className="paginationPage maxWidth">
      <h1>{pageName} </h1>
      <div className="moviesCategory_data">
        {pages?.data?.results?.length > 0 &&
          pages?.data?.results.map((i) => {
            return <Card key={i.id} item={i} />;
          })}
        <div className="pagination">
          <Pagination
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
              },
            }}
            page={+page}
            onChange={handelChangePage}
            count={pages?.data?.total_pages}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationPageSeries;
