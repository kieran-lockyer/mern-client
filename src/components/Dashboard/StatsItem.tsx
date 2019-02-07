import React from "react";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

const StatsItem = props => {
  const { avgTags, avgPhotos } = props;
  if (avgTags || avgPhotos) {
    return (
      <AvgStats>
        <StatsIcon>
          <Icon icon={props.icon} iconSize={100} />
        </StatsIcon>
        <StatsDetails>
          {avgTags && <h2>Avg. Daily Tags</h2>}
          {avgPhotos && <h2>Avg. Daily Photos</h2>}
          <span>{avgTags || avgPhotos}</span>
        </StatsDetails>
      </AvgStats>
    );
  } else {
    return (
      <Stats>
        <Icon icon={props.icon} iconSize={75} />
        <span>{props.totalPhotos || props.totalTags}</span>
      </Stats>
    );
  }
};

const Stats = styled.div`
  padding: 2rem;
  background: #fff;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  color: #fff;
  background: linear-gradient(to right bottom, #223f67, #192b44);
  & h2 {
    font-size: 30px;
  }

  & > span {
    padding: 10px;
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: inherit;
    font-size: 14px;
    margin-top: 10px;
    justify-content: center;
    display: flex;
    color: #51c7c1;
    &:last-child {
      background: #0000004f;
    }
  }

  &:not(:last-child) {
    margin-bottom: 0.9rem;
  }
`;

const AvgStats = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to bottom, #223f67, #192b44);
  border-radius: 15px;
  color: white;
  padding: 1rem;
  position: relative;

  &:nth-child(1) {
    margin-right: 10px;

    @media only screen and (max-width: 800px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  h2 {
    margin: 0;
  }
`;

const StatsIcon = styled.div`
  opacity: 0.2;
  position: absolute;
  left: -10px;
  top: -10px;
`;

const StatsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export default StatsItem;
