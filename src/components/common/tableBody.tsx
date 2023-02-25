import _ from 'lodash';
import React from 'react';
import { MovieState } from '../movies';

export interface TableBodyProps {
  data: any[];
  columns: any[];
}

export interface column {
  path: string;
  title: string;
  key: string;
  content: (movie: MovieState) => JSX.Element;
}
export const TableBody: React.FC<TableBodyProps> = (props) => {
  const { data, columns } = props;

  const cellKey = (row: MovieState, column: column) => {
    return row._id + (column.path || column.key);
  };
  const renderCell = (row: MovieState, column: column) => {
    if (column.content)
      return <td key={cellKey(row, column)}>{column.content(row)}</td>;
    else return <td key={cellKey(row, column)}>{_.get(row, column.path)}</td>;
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
