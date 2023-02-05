import React from "react";
import { Genre } from "../movies";

export interface ListItemsProps {
  items: any[];
  selectedItem: Genre;
  onItemSelect: (item: Genre) => void;
}
export const ListItems = (props: ListItemsProps) => {
  const { items, onItemSelect, selectedItem } = props;
  if (items.length === 0) return null;
  return (
    <ul className="list-group">
      <li
        style={{ cursor: "pointer" }}
        className={
          selectedItem._id ? "list-group-item" : "list-group-item active"
        }
        onClick={() => onItemSelect({ _id: "", name: "All genres" })}
      >
        All genres
      </li>
      {items.map((item) => (
        <li
          key={item._id}
          style={{ cursor: "pointer" }}
          className={
            item.name === selectedItem.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
