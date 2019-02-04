import React, { Component } from "react";
import AnalyticsItem from "./AnalyticsItem";
import styled from "styled-components";
import { connect } from "react-redux";

class AnalyticsCard extends Component<any, any> {
  renderPopTags = () => {
    return this.props.popular.map(item => {
      return <AnalyticsItem tag={item._id} count={item.count} key={item._id} />;
    });
  };

  renderTrendingTags = () => {
    return this.props.trending.map(item => {
      return <AnalyticsItem tag={item._id} count={item.count} key={item._id} />;
    });
  };

  renderCard = () => {
    return this.props.title === "Most Popular Tags"
      ? this.renderPopTags()
      : this.renderTrendingTags();
  };

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

const Card = styled.div`
  background: #fff;
  flex: 1 1 48%;
  margin: 10px 10px 30px 0;
  border-radius: 15px;
  align-self: start;
  &:nth-child(2n),
  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 1000px) {
    flex-basis: 100%;
  }
`;

const CardHeading = styled.div`
  color: #fff;
  background: linear-gradient(to right bottom, #223f67, #192b44);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

const mapStateToProps = state => ({
  popular: state.stats.popTags,
  trending: state.stats.trendingTags
});

export default connect(mapStateToProps)(AnalyticsCard);
