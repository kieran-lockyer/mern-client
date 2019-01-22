import React, { Component } from "react";
import AnalyticsItem from "./AnalyticsItem";
import { Card, CardHeading } from "./DashboardStyles";

export default class AnalyticsCard extends Component<any, any> {
  renderTags() {
    return this.props.tags.map((tag, id) => {
      return <AnalyticsItem tag={tag} key={id} />;
    });
  }
  render() {
    return (
      <Card>
        <CardHeading>
          <h3>{this.props.title}</h3>
        </CardHeading>
        {this.renderTags()}
      </Card>
    );
  }
}
