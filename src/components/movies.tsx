import React, { useEffect, useMemo, useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { sortItems } from "../utils/sort";
import { ListItems } from "./common/listItems";
import { Pagination } from "./common/pagination";
import { MoviesTable } from "./moviesTable";
import { Link } from "react-router-dom";

export interface MovieState {
  [key: string]: any;
  title: string;
  genre: { _id: string; name: string };
  numberInStock: number | string;
  dailyRentalRate: number | string;
  publishDate?: string;
  liked?: boolean;
}

export interface GenreState {
  _id: string | null;
  name: string | null;
}
export interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
}
export const Movies = () => {
  const [movies, setMovies] = useState<MovieState[]>(getMovies());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreState>({
    _id: null,
    name: null,
  });
  const [sortColumn, setSortColumn] = useState<SortState>({
    sortBy: "",
    sortOrder: "asc",
  });
  const moviesPerPage = 4;
  const genres = getGenres();

  const { currenPagedMovies, totalCount, currentPageCount } = useMemo(() => {
    const filteredMovies = selectedGenre._id
      ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
      : movies;
    const sortedMovies = sortItems(
      filteredMovies,
      sortColumn.sortBy,
      sortColumn.sortOrder
    );
    const currenPagedMovies = paginate(
      sortedMovies,
      moviesPerPage,
      currentPage
    );

    return {
      currenPagedMovies: currenPagedMovies,
      totalCount: filteredMovies.length,
      currentPageCount: currenPagedMovies.length,
    };
  }, [currentPage, movies, selectedGenre, sortColumn, moviesPerPage]);

  const handleDelete = (id?: string) => {
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  const handleLikeClick = (id: string) => {
    const tmp_movies = [...movies];
    const selectedMovie: MovieState | undefined = tmp_movies.find(
      (movie) => movie._id === id
    );
    if (selectedMovie) {
      const index = tmp_movies.indexOf(selectedMovie);
      tmp_movies[index].liked = !tmp_movies[index].liked;
    }

    setMovies(tmp_movies);
  };

  const handlePageClick = (pgNumber: number) => {
    setCurrentPage(pgNumber);
  };

  const handleGenreClick = (genre: GenreState) => {
    genre._id
      ? setSelectedGenre(genre)
      : setSelectedGenre({ _id: null, name: null });
  };

  const handleSort = (sortColumn: SortState) => {
    setSortColumn(sortColumn);
  };

  useEffect(() => {
    if (currentPage > 1 && currentPageCount === 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPageCount, currentPage]);

  const { length: count } = movies;

  if (count === 0)
    return (
      <>
        <p className="h3">The are no movies in the database</p>
        <Link to={`/movies/new`} className="btn btn-primary mb-4">
          New movie
        </Link>
      </>
    );
  return (
    <>
      <div className="row">
        <div className="col-2">
          <ListItems
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreClick}
          />
        </div>
        <div className="col">
          <Link to={`/movies/new`} className="btn btn-primary mb-4">
            New movie
          </Link>
          <p className="h3 mb-2">
            Showing
            <span className="badge bg-success m-1 px-2 py-1">{totalCount}</span>
            movies in the database
          </p>
          <MoviesTable
            onDelete={handleDelete}
            onLikeClick={handleLikeClick}
            currenPageMovies={currenPagedMovies}
            onSort={handleSort}
            sortColumn={sortColumn}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center fixed-bottom">
        <Pagination
          nbrItems={totalCount}
          itemsPerPage={moviesPerPage}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />
      </div>
    </>
  );
};
