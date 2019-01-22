import React, { PureComponent } from "react";
import { Stats } from "./DashboardStyles";
import StatsItem from "./StatsItem";
import { connect } from "react-redux";
import * as actions from "../../actions";

class DashboardStats extends PureComponent<any, any> {
  componentDidMount() {
    this.props.fetchPhotos();
    this.props.fetchTags();
  }
  render() {
    return (
      <Stats>
        <StatsItem name={"Photos"} value={this.props.photoLength} />
        <StatsItem name={"Tags"} value={this.props.tagsLength} />
        <StatsItem name={"Flagged"} value={18} />
      </Stats>
    );
  }
}

const mapStateToProps = state => ({
  photoLength: state.photos.length,
  tagsLength: state.tags.length
});

export default connect(
  mapStateToProps,
  actions
)(DashboardStats);
