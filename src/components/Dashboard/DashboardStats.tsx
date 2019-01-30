import React, { PureComponent } from "react";
import { Stats } from "../../styles/AppStyles";
import StatsItem from "./StatsItem";
import { connect } from "react-redux";
import * as actions from "../../actions";

class DashboardStats extends PureComponent<any, any> {
  componentDidMount() {
    this.props.fetchPhotos(1);
    this.props.fetchTags(1);
  }
  render() {
    return (
      <Stats>
        <StatsItem mainIcon="media" value={this.props.numPhotos} />
        <StatsItem mainIcon="tag" value={this.props.numTags} />
      </Stats>
    );
  }
}

const mapStateToProps = state => ({
  numPhotos: state.photos.data.totalDocs,
  numTags: state.tags.data.totalDocs
});

export default connect(
  mapStateToProps,
  actions
)(DashboardStats);
