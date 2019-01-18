import React, { Component } from "react";

class AnalyticsItem extends Component {
  render() {
    return (
      <div className="analytics__item">
        <div className="analytics__item-icon">
          <i className="fas fa-basketball-ball" />
        </div>
        <div className="analytics__item-details">
          <p className="analytics__item-title">Basketball</p>
          <p className="analytics__item-count">700 Images</p>
        </div>
        <div className="analytics__item-options">
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
    );
  }
}

export default AnalyticsItem;
