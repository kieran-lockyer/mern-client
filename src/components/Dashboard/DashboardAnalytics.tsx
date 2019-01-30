import React from "react"
import AnalyticsCard from "./AnalyticsCard"
import { Stats } from "../../styles/AppStyles";
import StatsItem from "./StatsItem";
import { DashboardAnalytics } from "../../styles/AppStyles"
import { applyMiddleware } from "redux";

export default () => {
  return (
    <DashboardAnalytics>
      <AnalyticsCard title="Most Popular Tags" />
      <AnalyticsCard title="Trending Tags" />
      <Stats>
        <StatsItem name="Average Photos Per Day" />
        <StatsItem name="Average Tags Per Day" />
      </Stats>
    </DashboardAnalytics>
  )
}
