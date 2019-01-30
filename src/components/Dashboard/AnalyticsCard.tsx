import React, { Component } from "react";
import AnalyticsItem from "./AnalyticsItem";
import { Card, CardHeading } from "../../styles/AppStyles";
import api from '../../api/index'

export default class AnalyticsCard extends Component<any, any> {
  state = {
    poptags: [],
    trendingtags: [],
  }

  componentDidMount() {
    api.get('/tags/stats/get/poptags').then(res => {
      this.setState({
        poptags: res.data
      })
    })

    api.get('/tags/stats/get/trendingtags').then(res => {
      this.setState({
        trendingtags: res.data
      })
    })
  }

  renderPopTags = () => {
    return this.state.poptags.map(item => {
      return <AnalyticsItem tag={item._id} count={item.count} key={item._id} />;
    })
  }

  renderTrendingTags = () => {
    return this.state.trendingtags.map(item => {
      return <AnalyticsItem tag={item._id} count={item.count} key={item._id} />;
    })
  }

  renderCard = () => {
    return this.props.title === "Most Popular Tags" ? this.renderPopTags() : this.renderTrendingTags()
  }

  render() {
    return (
      <Card>
        <CardHeading>
          <h3>{this.props.title}</h3>
        </CardHeading>
        {this.renderCard()}
      </Card>
    );
  }
}
