import React, { MouseEventHandler } from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface LikeProps {
  isLiked: boolean;
  onLikeClick: MouseEventHandler<SVGSVGElement>;
}
export const Like = ({ isLiked, onLikeClick }: LikeProps) => {
  const likeIcon = () => {
    const iconType = isLiked ? solidHeart : regularHeart;
    return (
      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        onClick={onLikeClick}
        icon={iconType}
      />
    );
  };
  return likeIcon();
};
