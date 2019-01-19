import React, { Component } from "react";
import { Icon, Colors } from "@blueprintjs/core";

export default class AllPhotos extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="filter">
            <h2>Collection of Photos Here</h2>
            <div className="filter-icons">
              <Icon color={Colors.GRAY2} icon="tag" iconSize={25} />
              <Icon
                color={Colors.GRAY2}
                icon="sort-alphabetical"
                iconSize={25}
              />
              <Icon color={Colors.GRAY2} icon="sort" iconSize={25} />
            </div>
          </div>
          <p>Need to be able to filter</p>
          <p>Gallery of thumbnail images here</p>
        </div>
      </div>
    );
  }
}
