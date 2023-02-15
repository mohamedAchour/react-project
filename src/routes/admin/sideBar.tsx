import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/admin/posts">posts</Link>
      </li>
      <li>
        <Link to="/admin/users">users</Link>
      </li>
    </ul>
  );
};
