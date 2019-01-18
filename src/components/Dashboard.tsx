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
          <AnalyticsCard />
          <AnalyticsCard />
          <AnalyticsCard />
        </section>
      </div>
    );
  }
}

export default Dashboard;
