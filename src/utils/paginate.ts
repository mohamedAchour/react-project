import { MovieState } from './../components/movies';
import _ from 'lodash';

export const paginate = (
  items: MovieState[],
  itemsPerPage: number,
  pageNumber: number
) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;

  //return items.slice(startIndex, startIndex + itemsPerPage);

  // alternatively we can use : lodash
  // _(items): to wrap our array to a lodash abject, and wrap it back with .value()
  return _(items).slice(startIndex).take(itemsPerPage).value();
};
