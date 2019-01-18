import React, { Component } from "react";
import AnalyticsItem from "./AnalyticsItem";

export default class AnalyticsCard extends Component {
  render() {
    return (
      <div className="analytics-card">
        <h3 className="analytics-card__heading">Popular Tags</h3>
        <AnalyticsItem />
        <AnalyticsItem />
        <AnalyticsItem />
        <AnalyticsItem />
      </div>
    );
  }
}
