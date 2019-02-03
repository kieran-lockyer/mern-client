import React from "react";
import StatsItem from "./StatsItem";
import { connect } from "react-redux";
import styled from "styled-components";

const DashboardStats = props => (
  <Stats>
    <StatsItem mainIcon="media" value={props.totalPhotos} />
    <StatsItem mainIcon="tag" value={props.totalTags} />
  </Stats>
);

const Stats = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = state => ({
  totalPhotos: state.photos.totalDocs,
  totalTags: state.tags.totalDocs
});

export default connect(mapStateToProps)(DashboardStats);
