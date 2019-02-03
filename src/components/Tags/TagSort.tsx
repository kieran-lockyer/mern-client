import React, { Component } from "react";
import { Menu, MenuItem } from "@blueprintjs/core";
import { connect } from "react-redux";
import * as actions from "../../actions";

class TagSortMenu extends Component<any, any> {
  state = {
    tagInput: this.props.tagInput
  };

  sortBy(pageNum, limit = 30, field, order, tags = "", option) {
    this.setState({ field, order, tags, limit, option });
    this.props.fetchTags(pageNum, limit, field, order, tags);
  }

  render() {
    return (
      <Menu>
        <MenuItem
          icon="sort-desc"
          text="Newest to Oldest"
          onClick={() =>
            this.sortBy(
              1,
              30,
              "dateAdded",
              "desc",
              this.state.tagInput.join(","),
              "Newest to Oldest"
            )
          }
        />
        <MenuItem
          icon="sort-asc"
          text="Oldest to Newest"
          onClick={() =>
            this.sortBy(
              1,
              30,
              "dateAdded",
              "asc",
              this.state.tagInput.join(","),
              "Oldest to Newest"
            )
          }
        />
        <MenuItem
          icon="sort-numerical-desc"
          text="Highest Confidence to Lowest Confidence"
          onClick={() =>
            this.sortBy(
              1,
              30,
              "confidence",
              "desc",
              this.state.tagInput.join(","),
              "Highest Confidence to Lowest Confidence"
            )
          }
        />
        <MenuItem
          icon="sort-numerical"
          text="Lowest Confidence to Highest Confidence"
          onClick={() =>
            this.sortBy(
              1,
              30,
              "confidence",
              "asc",
              this.state.tagInput.join(","),
              "Lowest Confidence to Highest Confidence"
            )
          }
        />
        <MenuItem
          icon="sort-alphabetical"
          text="Tag A-Z"
          onClick={() =>
            this.sortBy(
              1,
              30,
              "label",
              "asc",
              this.state.tagInput.join(","),
              "Tag A-Z"
            )
          }
        />
        <MenuItem
          icon="sort-alphabetical-desc"
          text="Tag Z-A"
          onClick={() =>
            this.sortBy(
              1,
              30,
              "label",
              "desc",
              this.state.tagInput.join(","),
              "Tag Z-A"
            )
          }
        />
      </Menu>
    );
  }
}

export default connect(
  null,
  actions
)(TagSortMenu);
