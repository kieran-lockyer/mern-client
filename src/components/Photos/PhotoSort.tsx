import React, { Component } from "react";
import { Menu, MenuItem } from "@blueprintjs/core";
import * as actions from "../../actions";
import { connect } from "react-redux";

class PhotoSort extends Component<any, any> {
  sortBy(pageNum, limit, field, order, tags, option) {
    this.props.setCurrentOption(option);
    this.props.fetchPhotos(pageNum, limit, field, order, tags);
  }

  render() {
    const { tagInput } = this.props;
    return (
      <Menu>
        <MenuItem
          icon="sort-desc"
          text="Newest to Oldest"
          onClick={() =>
            this.sortBy(
              this.props.pageId,
              30,
              "dateAdded",
              "desc",
              tagInput.join(","),
              "Newest to Oldest"
            )
          }
        />
        <MenuItem
          icon="sort-asc"
          text="Oldest to Newest"
          onClick={() =>
            this.sortBy(
              this.props.pageId,
              30,
              "dateAdded",
              "asc",
              tagInput.join(","),
              "Oldest to Newest"
            )
          }
        />
        <MenuItem
          icon="sort-numerical-desc"
          text="Highest Confidence to Lowest Confidence"
          onClick={() =>
            this.sortBy(
              this.props.pageId,
              30,
              "tags.0.confidence",
              "desc",
              tagInput.join(","),
              "Highest Confidence to Lowest Confidence"
            )
          }
        />
        <MenuItem
          icon="sort-numerical"
          text="Lowest Confidence to Highest Confidence"
          onClick={() =>
            this.sortBy(
              this.props.pageId,
              30,
              "tags.0.confidence",
              "asc",
              tagInput.join(","),
              "Lowest Confidence to Highest Confidence"
            )
          }
        />
        <MenuItem
          icon="sort-alphabetical"
          text="Tag A-Z"
          onClick={() =>
            this.sortBy(
              this.props.pageId,
              30,
              "tags.0.label",
              "asc",
              tagInput.join(","),
              "Tag A-Z"
            )
          }
        />
        <MenuItem
          icon="sort-alphabetical-desc"
          text="Tag Z-A"
          onClick={() =>
            this.sortBy(
              this.props.pageId,
              30,
              "tags.0.label",
              "desc",
              tagInput.join(","),
              "Tag Z-A"
            )
          }
        />
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  page: state.photos.filterData.pageNum,
  tagInput: state.photos.filterData.tagInput
});

export default connect(
  mapStateToProps,
  actions
)(PhotoSort);
