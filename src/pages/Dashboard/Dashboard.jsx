import React from "react";
import { DashboardLayout } from "../../layouts/Dashboard";
import "./Dashboard.scss";
import { Card } from "../../components";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="content">
        <div className="page-header">
          <h1>Expense Page</h1>
          <p>Friday, 23rd August 2020</p>
        </div>

        <div className="main-content-area">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          {/* <NoResult /> */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
