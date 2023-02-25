import React, { useEffect, useState } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import { sortItems } from '../utils/sort';
import { ListItems } from './common/listItems';
import { Pagination } from './common/pagination';
import { MoviesTable } from './moviesTable';

export interface MovieState {
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
  sortOrder: 'asc' | 'desc';
}
export const Movies = () => {
  const [movies, setMovies] = useState<MovieState[]>(getMovies());
  const [genres, setGenres] = useState<Genre[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    _id: '',
    name: 'All genres',
  });
  const [sortColumn, setSortColumn] = useState<Sort>({
    sortBy: '',
    sortOrder: 'asc',
  });
  const moviesPerPage = 4;

  const getPagedMovies = () => {
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
    };
  };

  const { currenPagedMovies, totalCount } = getPagedMovies();

  const handleDelete = (id: string) => {
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  const handleLikeClick = (id: string | undefined) => {
    const tmp_movies = [...movies];
    const selectedMovie: MovieState | any = tmp_movies.find(
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
      : setSelectedGenre({ _id: '', name: 'All genres' });
  };

  const handleSort = (sortColumn: Sort) => {
    setSortColumn(sortColumn);
  };

  /***effects***/
  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

  useEffect(() => {
    if (currenPagedMovies.length === 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [currenPagedMovies.length, currentPage]);
  /***render***/
  const { length: count } = movies;
  if (count === 0)
    return <p className="h3">The are no movies in the database</p>;
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
          <p className="h3 mb-5">
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
