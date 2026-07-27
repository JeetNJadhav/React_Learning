import { useState } from "react";

export const Pagination = ({ totalUsers, limit, setCurrentPage }) => {
  

  const totalPages = Math.ceil(totalUsers / limit);

  return (
    <PaginatonContainer
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  );
};

const PaginatonContainer = ({ totalPages, setCurrentPage }) => {
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: totalPages }).map((item, idx) => (
        <Page key={idx} pageNo={idx + 1} setCurrentPage={setCurrentPage} />
      ))}
    </div>
  );
};

const Page = ({ pageNo, setCurrentPage }) => {
  return (
    <button style={{ margin: 5 }} onClick={(e) => setCurrentPage(pageNo)}>
      {pageNo}
    </button>
  );
};
