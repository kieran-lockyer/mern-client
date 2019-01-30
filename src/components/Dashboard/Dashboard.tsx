import React from "react";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardGraph from "./DashboardGraph";
import DashboardStats from "./DashboardStats";
import * as Dashboard from "../../styles/AppStyles";

export default () => {
  return (
    <Dashboard.Dashboard>
      <Dashboard.DashboardWrapper>
        <Dashboard.Featured>
          <Dashboard.Graph>
            <DashboardGraph />
          </Dashboard.Graph>
          <DashboardStats />
        </Dashboard.Featured>
        <DashboardAnalytics />
      </Dashboard.DashboardWrapper>
    </Dashboard.Dashboard>
  );
};
