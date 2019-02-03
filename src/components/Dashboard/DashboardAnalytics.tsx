import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import StatsItem from "./StatsItem";
import styled from "styled-components";

export default props => {
  const { popTags, trendingTags } = props;
  return (
    <Container>
      <AnalyticsCard
        popular={popTags}
        trending={trendingTags}
        title="Most Popular Tags"
      />
      <AnalyticsCard
        popular={popTags}
        trending={trendingTags}
        title="Trending Tags"
      />
      <div className="avg-stats">
        <StatsItem name="Average Photos Per Day" statsIcon="media" />
        <StatsItem name="Average Tags Per Day" statsIcon="tag" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
