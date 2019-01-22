import React, { PureComponent } from "react";
import { Stats } from "./styles";
import StatsItem from "./StatsItem";

export default class DashboardStats extends PureComponent {
  render() {
    return (
      <Stats>
        <StatsItem name={"Photos"} value={3200} />
        <StatsItem name={"Tags"} value={1200} />
        <StatsItem name={"Flagged"} value={18} />
      </Stats>
    );
  }
}
