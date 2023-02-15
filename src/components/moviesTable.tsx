import React from "react";
import { MovieType, Sort } from "./movies";
import { Like } from "./common/like";
import { Table } from "./common/table";
import { Link } from "react-router-dom";

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
    {
      path: "title",
      title: "Title",
      content: (movie: MovieType) => (
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
    <Table
      items={currenPageMovies}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};
