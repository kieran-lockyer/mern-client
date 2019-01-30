import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { Stats } from "../../styles/AppStyles";
import StatsItem from "./StatsItem";
import { DashboardAnalytics } from "../../styles/AppStyles";
import { applyMiddleware } from "redux";

export default () => {
  return (
    <DashboardAnalytics>
      <AnalyticsCard title="Most Popular Tags" />
      <AnalyticsCard title="Trending Tags" />
      <div className="avg-stats">
        <StatsItem name="Average Photos Per Day" statsIcon="media" />
        <StatsItem name="Average Tags Per Day" statsIcon="tag" />
      </div>
    </DashboardAnalytics>
  );
};
