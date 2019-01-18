import React, { Component } from "react";
import AnalyticsCard from "./AnalyticsCard";
import FeaturedChart from "./FeaturedChart";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section className="featured">
          <div className="featured-graph chart">
            <FeaturedChart />
          </div>
        </section>

        <section className="analytics">
          {/* 1ST ROW */}
          <AnalyticsCard />
          <AnalyticsCard />
          <AnalyticsCard />
          {/* 2ND ROW */}
          <AnalyticsCard />
          <AnalyticsCard />
        </section>
      </div>
    );
  }
}

export default Dashboard;
