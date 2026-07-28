import { useState } from "react";

export const Pagination = ({
  totalUsers,
  limit,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalUsers / limit);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((item, idx) => (
        <PageButton
          key={idx + 1}
          page={idx + 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
};

const PageButton = ({ page, setCurrentPage, currentPage }) => {
  const isActive = page === currentPage;
  console.log(page, currentPage, page === currentPage);
  return (
    <button
      className={`pageButton ${isActive ? "active" : ""}`}
      onClick={() => setCurrentPage(page)}      
    >
      {page}
    </button>
  );
};
 