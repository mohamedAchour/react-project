import React from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Like = ({ isLiked, onLikeClick }) => {
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
