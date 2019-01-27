import React from "react";
import { StatsItem as Stats } from "../../styles/AppStyles";

export default ({ name, value }) => {
  return (
    <Stats>
      <h2>{value}</h2>
      <span>{name}</span>
    </Stats>
  );
};
