import { Pagination } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilterData } from "../../store/Movies/API";
import { setLoading } from "../../store/Movies/moviesSlice";

const PaginationFilter = ({ page, total_pages, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelChangePage = async (e, value) => {
    dispatch(setLoading(true));
    let newPath = path?.slice(0, -1) + value;
    await dispatch(fetchFilterData({ path: newPath }));
    navigate(`/filter/${newPath}`);
    dispatch(setLoading(false));
  };
  const currentPage = page ? parseInt(page, 10) : 1;
  return (
    <div className="pagination">
      {total_pages > 1 && (
        <Pagination
          size="large"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
          }}
          page={currentPage}
          onChange={handelChangePage}
          count={total_pages}
          color="primary"
          siblingCount={3}
          
        />
      )}
    </div>
  );
};

export default PaginationFilter;
