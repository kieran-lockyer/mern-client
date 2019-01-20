import React, { Component } from "react";
import Analytics from "./Analytics";
import FeaturedChart from "./FeaturedChart";
import SortableComponent from "./SortableComponent";
import DemoChart from "./DemoChart";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section className="featured">
          <div className="featured-graph chart">
            <DemoChart />
          </div>
          <div className="featured-stats">
            <div className="featured-stats-item">
              <h2>3,304</h2>
              <span>Photos</span>
            </div>
            <div className="featured-stats-item">
              <h2>1,700</h2>
              <span>Tags</span>
            </div>
            <div className="featured-stats-item">
              <h2>15</h2>
              <span>Flagged</span>
            </div>
          </div>
        </section>
        {/* <Analytics /> */}
        <SortableComponent />
      </div>
    );
  }
}

export default Dashboard;
