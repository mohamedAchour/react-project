import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Sort } from "../movies";

export interface TableHeaderProps {
  headerItems: any[];
  sortColumn: Sort;
  onSort: (sortColumn: Sort) => void;
}
export const TableHeader = (props: TableHeaderProps) => {
  const { headerItems, sortColumn, onSort } = props;
  const raiseSort = (sortBy: string) => {
    const _sortColumn: Sort =
      sortColumn.sortBy === sortBy
        ? {
            sortBy,
            sortOrder: sortColumn.sortOrder === "asc" ? "desc" : "asc",
          }
        : {
            sortBy,
            sortOrder: "asc",
          };

    onSort(_sortColumn);
  };

  const sortIcon = sortColumn.sortOrder === "asc" ? faSortUp : faSortDown;
  return (
    <thead>
      <tr>
        {headerItems.map((item) => (
          <th
            style={{
              cursor: "pointer",
              width: item === headerItems[0] ? "25%" : "20%",
            }}
            scope="col"
            onClick={() => {
              raiseSort(item.name);
            }}
          >
            {item.title}
            {sortColumn.sortBy === item.name && (
              <FontAwesomeIcon className="ms-2" icon={sortIcon} />
            )}
          </th>
        ))}
        <th scope="col"></th>
      </tr>
    </thead>
  );
};
