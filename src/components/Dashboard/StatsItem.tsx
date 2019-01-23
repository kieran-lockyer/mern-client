import React from "react";
import { StatsItem as Stats } from "./DashboardStyles";

// Add commas to number
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ({ name, value }) => {
  return (
    <Stats>
      <h2>{value}</h2>
      <span>{name}</span>
    </Stats>
  );
};
