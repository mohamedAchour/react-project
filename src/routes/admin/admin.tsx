import React from "react";
import { SideBar } from "./sideBar";
import { Users } from "./users";
import { Route } from "react-router-dom";
import { Posts } from "./posts";

export const Admin = () => {
  return (
    <div>
      <h1>Admin Dashbord</h1>
      <SideBar />
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};
