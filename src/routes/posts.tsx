import React from "react";
import queryString from "query-string";

export const Posts = (props: any) => {
  const { match, location } = props;
  const { sortBy, approved } = queryString.parse(location.search);
  return (
    <div>
      <h1>Posts</h1>

      <p>Sorted by: {sortBy}</p>
      <p>Approved: {approved}</p>
      <p>
        Year:{match.params.year} Month: {match.params.month}
      </p>
    </div>
  );
};
