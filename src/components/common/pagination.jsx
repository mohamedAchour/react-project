import React from "react";
import _ from "lodash";

export const Pagination = ({
  nbrItems,
  itemsPerPage,
  currentPage,
  onPageClick,
}) => {
  const nbrOfPages = Math.ceil(nbrItems / itemsPerPage);
  const pages = _.range(1, nbrOfPages + 1);

  /*don't show this component if all items appear on one page*/
  if (nbrOfPages <= 1) return null;
  /**METHOD 1**/
  // const pages = () => {
  //   let pages = [];
  //   for (let pgNumber = 0; pgNumber < nbrOfPages; pgNumber++) {
  //     pages.push(
  //       <li className="page-item" key={pgNumber}>
  //         <a
  //           className="page-link"
  //           href="#"
  //           onClick={() => {
  //             onPageClick(pgNumber);
  //           }}
  //         >
  //           {pgNumber + 1}
  //         </a>
  //       </li>
  //     );
  //   }
  //   return pages;
  // };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>

        {/**METHOD 1**/}
        {/* {pages()} */}

        {pages.map((page) => (
          <li
            className={`page-item ${page === currentPage && "active"}`}
            key={page}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => {
                onPageClick(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
