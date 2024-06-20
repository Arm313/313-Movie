import { Pagination } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaginationSeries = ({ page, total_pages, path }) => {
  const navigate = useNavigate();
  const handelChangePage = (e, value) => {
    navigate(`/series/${path}/${value}?`);
  };
  return (
    <div className="pagination">
      <Pagination
        size="large"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
        }}
        page={page}
        onChange={handelChangePage}
        count={total_pages}
        color="primary"
        siblingCount={3}
      />
    </div>
  );
};

export default PaginationSeries;
