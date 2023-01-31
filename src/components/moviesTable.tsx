import React from "react";

import { Movie } from "./movie";
import { MovieType, Sort } from "./movies";
import { TableHeader } from "./common/tableHeader";

export interface MoviesTableProps {
  onDelete: (id: string) => void;
  onLikeClick: (id: string) => void;
  onSort: (sortColumn: Sort) => void;
  currenPageMovies: MovieType[];
  sortColumn: Sort;
}

export const MoviesTable = (props: MoviesTableProps) => {
  const { onDelete, onLikeClick, onSort, currenPageMovies, sortColumn } = props;

  const moviesHeader = [
    { name: "title", title: "title" },
    { name: "genre.name", title: "genre" },
    { name: "numberInStock", title: "stock" },
    { name: "dailyRentalRate", title: "rate" },
  ];
  return (
    <table style={{ tableLayout: "fixed" }} className="table table-fixed mb-5">
      <TableHeader
        headerItems={moviesHeader}
        sortColumn={sortColumn}
        onSort={onSort}
      />
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
