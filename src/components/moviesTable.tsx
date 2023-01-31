import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "./movie";
import { MovieType, Sort } from "./movies";

export interface MoviesTableProps {
  onDelete: (id: string) => void;
  onLikeClick: (id: string) => void;
  onSortSelect: (sortBy: string) => void;
  currenPageMovies: MovieType[];
  selectedSort: Sort;
}

export const MoviesTable = ({
  onDelete,
  onLikeClick,
  onSortSelect,
  currenPageMovies,
  selectedSort,
}: MoviesTableProps) => {
  const sortIcon = selectedSort.sortOrder === "asc" ? faSortUp : faSortDown;
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
              onSortSelect("genre.name");
            }}
          >
            Genre
            {selectedSort.sortBy === "genre.name" && (
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
            isLiked={movie.liked ?? false}
          />
        ))}
      </tbody>
    </table>
  );
};
