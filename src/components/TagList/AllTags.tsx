import React, { Component } from "react";
import { Colors, Icon, TagInput } from "@blueprintjs/core";

export default class AllTags extends Component {
  state = {
    tagSearch: []
  };
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="filter">
            <h2>Collection of Tags Here</h2>
            <div className="filter-search-form">
              <TagInput
                values={this.state.tagSearch}
                fill
                large
                leftIcon="tag"
                placeholder="Filter by tags"
              />
            </div>
            <div className="filter-icons">
              <Icon
                color={Colors.GRAY2}
                icon="sort-alphabetical"
                iconSize={25}
              />
              <Icon color={Colors.GRAY2} icon="sort" iconSize={25} />
            </div>
          </div>
          <p>Need to be able to filter tags</p>
        </div>
      </div>
    );
  }
}
