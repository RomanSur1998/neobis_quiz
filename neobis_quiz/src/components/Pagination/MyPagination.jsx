import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MyPagination = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (page) => {
    setPage(page);
  };
  console.log(page, "page");
  return (
    <>
      <Stack spacing={2} style={{ margin: "40px auto" }}>
        <Pagination
          count={10}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          style={{ margin: "0 auto", display: "block" }}
        />
      </Stack>
    </>
  );
};

export default MyPagination;
