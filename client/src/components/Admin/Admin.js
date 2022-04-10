import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import AdminNav from "./AdminNav/AdminNav";
import "./Admin.css";
import Users from "./Users/Users";
import Posts from "./Posts/Posts";
import { Switch, Route } from "react-router-dom";
import AddFlight from "./AddFlight/AddFlight";

const Admin = () => {
  return (
    <div className="admin_parent">
      <AdminNav />
      <div className="admin_container">
        <Sidebar />
        <Switch>
          <Route path="/admin/posts">
            <Posts />
          </Route>
          <Route path="/admin/users">
            <Users />
          </Route>
          <Route path="/admin/addflight">
            <AddFlight />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
