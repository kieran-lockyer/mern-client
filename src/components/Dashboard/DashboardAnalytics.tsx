import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { DashboardAnalytics } from "./styles";

const tags = ["tag1", "tag2", "tag3", "tag4", "tag5"];

export default () => {
  return (
    <DashboardAnalytics>
      <AnalyticsCard title="Most Popular" tags={tags} />
      <AnalyticsCard title="Most Popular" tags={tags} />
      <AnalyticsCard title="Most Popular" tags={tags} />
      <AnalyticsCard title="Most Popular" tags={tags} />
    </DashboardAnalytics>
  );
};
