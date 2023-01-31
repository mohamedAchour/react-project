import React from "react";
import { Like } from "./common/like";
import { MovieType } from "./movies";

export interface MovieProps {
  movie: MovieType;
  onLikeClick: (id: string) => void;
  onDelete: (id: string) => void;
  isLiked: boolean | undefined;
}
export const Movie = ({
  movie: {
    _id,
    title,
    numberInStock,
    genre: { name },
    dailyRentalRate,
  },
  onLikeClick,
  onDelete,
  isLiked,
}: MovieProps) => {
  return (
    <tr key={_id}>
      <td>{title}</td>
      <td>{name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <Like onLikeClick={() => onLikeClick(_id)} isLiked={isLiked} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
