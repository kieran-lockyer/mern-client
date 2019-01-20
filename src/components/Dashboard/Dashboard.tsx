import React, { Component } from "react";
import SortableComponent from "./SortableComponent";
import DashboardChart from "./DashboardChart";
import AnimatedNumber from "react-animated-number";

class Dashboard extends Component {
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="dashboard">
        <div className="featured-container">
          <section className="featured">
            <div className="featured-graph chart">
              <DashboardChart />
            </div>
            <div className="featured-stats">
              <div className="featured-stats-item">
                <h2>
                  <AnimatedNumber
                    value={3304}
                    style={{
                      transition: "0.8s ease-out",
                      transitionProperty: "background-color, color, opacity"
                    }}
                    formatValue={n => this.numberWithCommas(n)}
                    stepPrecision={0}
                    duration={1000}
                  />
                </h2>
                <span>Photos</span>
              </div>
              <div className="featured-stats-item">
                <h2>
                  <AnimatedNumber
                    value={1700}
                    style={{
                      transition: "0.8s ease-out",
                      transitionProperty: "background-color, color, opacity"
                    }}
                    formatValue={n => this.numberWithCommas(n)}
                    stepPrecision={0}
                    duration={1000}
                  />
                </h2>
                <span>Tags</span>
              </div>
              <div className="featured-stats-item">
                <h2>
                  <AnimatedNumber
                    value={15}
                    style={{
                      transition: "0.8s ease-out",
                      transitionProperty: "background-color, color, opacity"
                    }}
                    formatValue={n => this.numberWithCommas(n)}
                    stepPrecision={0}
                    duration={1000}
                  />
                </h2>
                <span>Flagged</span>
              </div>
            </div>
          </section>
          <SortableComponent />
        </div>
      </div>
    );
  }
}

export default Dashboard;
