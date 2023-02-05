import _ from "lodash";
import React from "react";
import { MovieType } from "../movies";

export interface TableBodyProps {
  data: any[];
  columns: any[];
}

export interface column {
  path: string;
  title: string;
  key: string;
  content: (movie: MovieType) => JSX.Element;
}
export const TableBody: React.FC<TableBodyProps> = (props) => {
  const { data, columns } = props;

  const cellKey = (row: MovieType, column: column) => {
    return row._id + (column.path || column.key);
  };
  const renderCell = (row: MovieType, column: column) => {
    if (column.path)
      return <td key={cellKey(row, column)}>{_.get(row, column.path)}</td>;
    else return <td key={cellKey(row, column)}>{column.content(row)}</td>;
  };
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row._id}>
          {columns.map((column) => renderCell(row, column))}
        </tr>
      ))}
    </tbody>
  );
};
