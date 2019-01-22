import React from "react";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardGraph from "./DashboardGraph";
import DashboardStats from "./DashboardStats";

// Styles
import { Dashboard as Container, Wrapper, Featured, Graph } from "./styles";

export default () => {
  return (
    <Container>
      <Wrapper>
        <Featured>
          <Graph>
            <DashboardGraph />
          </Graph>
          <DashboardStats />
        </Featured>
        <DashboardAnalytics />
      </Wrapper>
    </Container>
  );
};
