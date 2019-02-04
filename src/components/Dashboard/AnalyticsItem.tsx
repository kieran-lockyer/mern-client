import React from "react";
import { Icon, Colors } from "@blueprintjs/core";
import styled from "styled-components";

export default ({ tag, count }) => {
  return (
    <CardItem>
      <CardLeft>
        <Icon color={Colors.LIGHT_GRAY1} icon="tag" iconSize={25} />
      </CardLeft>
      <CardDetails>
        <CardTitle>{tag}</CardTitle>
        <CardCount>{count}</CardCount>
      </CardDetails>
    </CardItem>
  );
};

const CardItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 5rem;
  padding: 0 1rem;

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background: #f9f9f9;
  }
`;

const CardLeft = styled.div`
  margin-right: 1rem;
`;

const CardDetails = styled.div`
  margin-right: auto;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  font-size: 15px;
`;

const CardCount = styled.p`
  font-size: 0.875rem;
  color: #ccc;
`;
