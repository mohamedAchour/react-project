import React from "react";

import { MovieType, Sort } from "./movies";
import { TableHeader } from "./common/tableHeader";
import { TableBody } from "./common/tableBody";
import { Like } from "./common/like";

export interface MoviesTableProps {
  onDelete: (id: string) => void;
  onLikeClick: (id: string | undefined) => void;
  onSort: (sortColumn: Sort) => void;
  currenPageMovies: MovieType[];
  sortColumn: Sort;
}

export const MoviesTable = (props: MoviesTableProps) => {
  const { onDelete, onLikeClick, onSort, currenPageMovies, sortColumn } = props;

  const columns = [
    { path: "title", title: "title" },
    { path: "genre.name", title: "genre" },
    { path: "numberInStock", title: "stock" },
    { path: "dailyRentalRate", title: "rate" },
    {
      key: "like",
      content: (movie: MovieType) => (
        <Like
          onLikeClick={() => onLikeClick(movie._id)}
          isLiked={movie.liked ?? false}
        />
      ),
    },
    {
      key: "delete",
      content: (movie: MovieType) => (
        <button onClick={() => onDelete(movie._id)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <table style={{ tableLayout: "fixed" }} className="table table-fixed">
      <TableHeader
        headerItems={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody data={currenPageMovies} columns={columns} />
    </table>
  );
};
