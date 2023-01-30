export const sortItems = (
  items,
  sortKey1,
  sortKey2 = null,
  sortOrder = "ASC"
) => {
  if (!sortKey1) return items;

  return [...items].sort((a, b) =>
    !sortKey2
      ? sortOrder === "ASC"
        ? a[sortKey1] > b[sortKey1]
        : a[sortKey1] < b[sortKey1]
      : sortOrder === "ASC"
      ? a[sortKey1][sortKey2] > b[sortKey1][sortKey2]
      : a[sortKey1][sortKey2] < b[sortKey1][sortKey2]
  );
};
