import React, { Component } from "react";
import AnalyticsItem from "./AnalyticsItem";
import { Card, CardHeading } from "./styles";

export default class AnalyticsCard extends Component<any, any> {
  renderTags() {
    return this.props.tags.map(tag => {
      return <AnalyticsItem tag={tag} />;
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
