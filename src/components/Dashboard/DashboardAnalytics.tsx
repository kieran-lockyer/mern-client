import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { DashboardAnalytics } from "./DashboardStyles";

const tags = ["tag1", "tag2", "tag3", "tag4", "tag5"];

export default () => {
  return (
    <DashboardAnalytics>
      <AnalyticsCard title="Most Popular" tags={tags} />
      <AnalyticsCard title="Most Recent" tags={tags} />
      <AnalyticsCard title="Trending" tags={tags} />
      <AnalyticsCard title="Top Clients" tags={tags} />
    </DashboardAnalytics>
  );
};
