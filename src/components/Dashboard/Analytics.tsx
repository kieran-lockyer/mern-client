import React, { Component } from "react";
import AnalyticsCard from "./AnalyticsCard";

class Analytics extends Component {
  render() {
    return (
      <section className="analytics">
        {/* 1ST ROW */}
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        {/* 2ND ROW */}
        <AnalyticsCard />
        <AnalyticsCard />
      </section>
    );
  }
}

export default Analytics;
