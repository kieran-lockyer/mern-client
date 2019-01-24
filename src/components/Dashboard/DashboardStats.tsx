import React, { PureComponent } from "react";
import { Stats } from "./DashboardStyles";
import StatsItem from "./StatsItem";
import { connect } from "react-redux";
import * as actions from "../../actions";

class DashboardStats extends PureComponent<any, any> {
  componentDidMount() {
    this.props.fetchPhotos(1);
    this.props.fetchTags(1);
  }
  render() {
    console.log(this.props);
    return (
      <Stats>
        <StatsItem name={"Photos"} value={this.props.numPhotos} />
        <StatsItem name={"Tags"} value={this.props.numTags} />
        <StatsItem name={"Flagged"} value={18} />
      </Stats>
    );
  }
}

const mapStateToProps = state => ({
  numPhotos: state.photos.totalDocs,
  numTags: state.tags.data.totalDocs
});

export default connect(
  mapStateToProps,
  actions
)(DashboardStats);
