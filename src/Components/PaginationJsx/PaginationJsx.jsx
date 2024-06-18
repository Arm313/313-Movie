import { Pagination } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaginationJsx = ({ page, total_pages ,path}) => {
    const navigate = useNavigate()
     const handelChangePage = async (e, value) => {
        navigate(`/${path == "movies" ? "movies" : "series"}/${path}/${value}?`);
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
      />
    </div>
  );
};

export default PaginationJsx;
