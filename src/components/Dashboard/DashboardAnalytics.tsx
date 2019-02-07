import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import StatsItem from "./StatsItem";
import styled from "styled-components";
import { connect } from "react-redux";

const DashboardAnalytics = props => {
  return (
    <>
      <AvgStats>
        <StatsItem icon="media" avgPhotos={props.avgPhotos} />
        <StatsItem icon="tag" avgTags={props.avgTags} />
      </AvgStats>
      <Container>
        <AnalyticsCard title="Popular Tags" />
        <AnalyticsCard title="Trending Tags" />
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AvgStats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const mapStateToProps = state => ({
  avgTags: state.stats.avgTags,
  avgPhotos: state.stats.avgPhoto
});

export default connect(mapStateToProps)(DashboardAnalytics);
