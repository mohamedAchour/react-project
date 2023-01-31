import _ from "lodash";

export const sortItems = (
  items: any[],
  sortColumn: string,
  sortOrder: "asc" | "desc"
) => {
  if (!sortColumn) return items;
  return _.orderBy(items, [sortColumn], [sortOrder]);
};
