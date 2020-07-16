import React from "react";
import "./Dashboard.scss";
import { Header, SideNav } from "./components";

const DashboardLayout = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <SideNav />
        <main className="main-content">{props.children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
