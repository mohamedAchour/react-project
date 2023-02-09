import React from "react";
import queryString from "query-string";

const posts = [
  { year: 1990, month: 12, descr: "djbdjke edbzkjdbjkzd" },
  { year: 1990, month: 12, descr: "ferg frgegr rtbgrtgrg" },
  { year: 2020, month: 11, descr: "rtgrt rtgrtgrtt't 't't't't" },
  { year: 2020, month: 10, descr: "rrfrf fgggggggggggg" },
  { year: 2020, month: 11, descr: "ggggggggggggggggr ttttttttttttttt" },
  { year: 1965, month: 9, descr: "djbdjke edbzkjdbjkzd" },
  { year: 1965, month: 4, descr: "rrrrrrrrrrrr tgggggrtgrt tgrhhrtgbv  rrtg" },
];
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
