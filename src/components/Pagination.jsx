import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="">
      <ul className="pagination ">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item border-4 w-10 inline-block">
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
