import React, { Component } from "react";
import AnalyticsItem from "./AnalyticsItem";
import { SortableHandle } from "react-sortable-hoc";
import { Icon, Colors } from "@blueprintjs/core";

const DragHandle = SortableHandle(() => (
  <Icon icon="drag-handle-horizontal" color={Colors.GRAY4} />
));

const AnalyticsCard = props => {
  console.log(props);
  return (
    <div className="analytics-card" style={{ opacity: 1 }}>
      <div className="analytics-card__heading">
        <DragHandle />
        <h3>{props.title}</h3>
      </div>
      <AnalyticsItem />
      <AnalyticsItem />
      <AnalyticsItem />
      <AnalyticsItem />
    </div>
  );
};

export default AnalyticsCard;
