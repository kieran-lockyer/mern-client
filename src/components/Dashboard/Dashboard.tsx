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
        </section>
        {/* <Analytics /> */}
        <SortableComponent />
      </div>
    );
  }
}

export default Dashboard;
