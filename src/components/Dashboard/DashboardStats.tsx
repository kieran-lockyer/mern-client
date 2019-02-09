import React from "react";
import StatsItem from "./StatsItem";
import { connect } from "react-redux";
import styled from "styled-components";

const DashboardStats = props => {
  return (
    <Stats>
      <StatsItem icon="media" totalPhotos={props.totalPhotos} />
      <StatsItem icon="tag" totalTags={props.totalTags} />
    </Stats>
  );
};
const Stats = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

const mapStateToProps = state => ({
  totalPhotos: state.photos.photoData.totalDocs,
  totalTags: state.tags.tagData.totalDocs
});

export default connect(mapStateToProps)(DashboardStats);
