const compareAscending = (a: number | string, b: number | string) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};
const compareDescending = (a: number | string, b: number | string) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};
export const sortItems = (
  items: any[],
  sortKey1: string,
  sortKey2: string,
  sortOrder: string
) => {
  if (!sortKey1) return items;

  return [...items].sort((a, b) =>
    !sortKey2
      ? sortOrder === "ASC"
        ? compareAscending(a[sortKey1], b[sortKey1])
        : compareDescending(a[sortKey1], b[sortKey1])
      : sortOrder === "ASC"
      ? compareAscending(a[sortKey1][sortKey2], b[sortKey1][sortKey2])
      : compareDescending(a[sortKey1][sortKey2], b[sortKey1][sortKey2])
  );
};
