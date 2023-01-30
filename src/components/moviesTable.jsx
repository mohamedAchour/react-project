import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "./movie";

export const MoviesTbale = ({
  onDelete,
  onLikeClick,
  currenPageMovies,
  onSortSelect,
  selectedSort,
}) => {
  const sortIcon = selectedSort.sortOrder === "ASC" ? faSortUp : faSortDown;
  return (
    <table style={{ tableLayout: "fixed" }} className="table table-fixed mb-5">
      <thead>
        <tr>
          <th
            style={{ cursor: "pointer", width: "25%" }}
            scope="col"
            onClick={() => {
              onSortSelect("title");
            }}
          >
            Title
            {selectedSort.sortBy === "title" && (
              <FontAwesomeIcon className="ms-2" icon={sortIcon} />
            )}
          </th>
          <th
            style={{ cursor: "pointer" }}
            scope="col"
            onClick={() => {
              onSortSelect("genre");
            }}
          >
            Genre
            {selectedSort.sortBy === "genre" && (
              <FontAwesomeIcon className="ms-2" icon={sortIcon} />
            )}
          </th>
          <th
            style={{ cursor: "pointer" }}
            scope="col"
            onClick={() => {
              onSortSelect("numberInStock");
            }}
          >
            Stock
            {selectedSort.sortBy === "numberInStock" && (
              <FontAwesomeIcon className="ms-2" icon={sortIcon} />
            )}
          </th>
          <th
            style={{ cursor: "pointer" }}
            scope="col"
            onClick={() => {
              onSortSelect("dailyRentalRate");
            }}
          >
            Rate
            {selectedSort.sortBy === "dailyRentalRate" && (
              <FontAwesomeIcon className="ms-2" icon={sortIcon} />
            )}
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {currenPageMovies.map((movie) => (
          <Movie
            key={movie._id}
            movie={movie}
            onDelete={onDelete}
            onLikeClick={onLikeClick}
            isLiked={movie.liked}
          />
        ))}
      </tbody>
    </table>
  );
};
