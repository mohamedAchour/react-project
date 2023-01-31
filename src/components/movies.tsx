import React, { useEffect, useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { sortItems } from "../utils/sort";
import { ListItems } from "./common/listItems";
import { Pagination } from "./common/pagination";
import { MoviesTable } from "./moviesTable";

export interface MovieType {
  _id: string;
  title: string;
  genre: { _id: string; name: string };
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: string;
  liked?: boolean;
}

export interface Genre {
  _id: string | null;
  name: string | null;
}
export interface Sort {
  sortBy: string;
  sortOrder: string;
}
export const Movies = () => {
  /***states***/
  const [movies, setMovies] = useState<MovieType[]>(getMovies());
  const [genres, setGenres] = useState<Genre[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    _id: null,
    name: null,
  });
  const [selectedSort, setSelectedSort] = useState<Sort>({
    sortBy: "",
    sortOrder: "ASC",
  });

  /***Variables***/
  const moviesPerPage = 4;
  const filteredMoviesList = selectedGenre._id
    ? sortItems(
        movies.filter((movie) => movie.genre._id === selectedGenre._id),
        selectedSort.sortBy,
        selectedSort.sortBy === "genre" ? "name" : "",
        selectedSort.sortOrder
      )
    : sortItems(
        movies,
        selectedSort.sortBy,
        selectedSort.sortBy === "genre" ? "name" : "",
        selectedSort.sortOrder
      );
  const { length: count } = movies;
  const currenPageMovies = paginate(
    filteredMoviesList,
    moviesPerPage,
    currentPage
  );

  /***effects***/
  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

  useEffect(() => {
    if (currenPageMovies.length === 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currenPageMovies, currentPage]);

  /***functions***/
  const handleDelete = (id: string) => {
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  const handleLikeClick = (id: string) => {
    const tmp_movies = [...movies];
    const selectedMovie: MovieType | any = tmp_movies.find(
      (movie) => movie._id === id
    );
    const index = tmp_movies.indexOf(selectedMovie);
    tmp_movies[index].liked = !tmp_movies[index].liked;

    setMovies(tmp_movies);
  };

  const handlePageClick = (pgNumber: number) => {
    setCurrentPage(pgNumber);
  };

  const handleGenreClick = (genre: Genre) => {
    genre._id
      ? setSelectedGenre(genre)
      : setSelectedGenre({ _id: null, name: null });
  };

  const handleSort = (_selectedSort: string) => {
    setSelectedSort({
      sortBy: _selectedSort,
      sortOrder: selectedSort.sortOrder === "ASC" ? "DES" : "ASC",
    });
  };
  /***render***/
  return (
    <>
      {count === 0 ? (
        <p className="h3">The are no movies in the database</p>
      ) : (
        <>
          <div className="row">
            <div className="col-3">
              <ListItems
                items={genres}
                selectedItem={selectedGenre}
                onItemSelect={handleGenreClick}
              />
            </div>
            <div className="col">
              <p className="h3 mb-5">
                Showing
                <span className="badge bg-success m-1 px-2 py-1">
                  {filteredMoviesList.length}
                </span>
                movies in the database
              </p>
              <MoviesTable
                onDelete={handleDelete}
                onLikeClick={handleLikeClick}
                currenPageMovies={currenPageMovies}
                onSortSelect={handleSort}
                selectedSort={selectedSort}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center fixed-bottom">
            <Pagination
              nbrItems={filteredMoviesList.length}
              itemsPerPage={moviesPerPage}
              currentPage={currentPage}
              onPageClick={handlePageClick}
            />
          </div>
        </>
      )}
    </>
  );
};