import React from "react";
import { SortState } from "../../movies";
import { TableBody } from "./tableBody";
import { TableHeader } from "./tableHeader";

export interface TableProps {
  columns: any[];
  items: any[];
  sortColumn: SortState;
  onSort: (sortColumn: SortState) => void;
}
export const Table = (props: TableProps) => {
  const { columns, sortColumn, onSort, items } = props;
  return (
    <table style={{ tableLayout: "fixed" }} className="table table-fixed">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={items} columns={columns} />
    </table>
  );
};
