import React from "react";
import { MovieState, SortState } from "./movies";
import { Like } from "./common/like";
import { Table } from "./common/table/table";
import { Link } from "react-router-dom";

export interface MoviesTableProps {
  onDelete: (id: string) => void;
  onLikeClick: (id: string) => void;
  onSort: (sortColumn: SortState) => void;
  currenPageMovies: MovieState[];
  sortColumn: SortState;
}

export const MoviesTable = (props: MoviesTableProps) => {
  const { onDelete, onLikeClick, onSort, currenPageMovies, sortColumn } = props;

  const columns = [
    {
      path: "title",
      title: "Title",
      content: (movie: MovieState) => (
        <Link to={`/movies/${movie._id}`} className="text-decoration-none">
          {movie.title}
        </Link>
      ),
    },
    { path: "genre.name", title: "Genre" },
    { path: "numberInStock", title: "Stock" },
    { path: "dailyRentalRate", title: "Rate" },
    {
      key: "like",
      content: (movie: MovieState) => (
        <Like
          onLikeClick={() => onLikeClick(movie._id)}
          isLiked={movie.liked ?? false}
        />
      ),
    },
    {
      key: "delete",
      content: (movie: MovieState) => (
        <button onClick={() => onDelete(movie._id)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      items={currenPageMovies}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};
