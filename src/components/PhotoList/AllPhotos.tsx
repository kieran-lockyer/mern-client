import React, { Component } from "react";
import { Icon, Colors, TagInput } from "@blueprintjs/core";
import { connect } from "react-redux";
import * as actions from "../../actions/";

class AllPhotos extends Component<any, any> {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderTags(metadata) {
    return metadata.map((tag, id) => {
      return (
        <div key={id}>
          <p>{tag.tag}</p>
        </div>
      );
    });
  }

  renderPhotos() {
    if (this.props.photos) {
      return this.props.photos.map((photo, id) => {
        return (
          <div key={id} className="tag-item-list">
            <img src={photo.url} alt="" />
            <p>ClientID: {photo.client}</p>
            <p>Date: {photo.datetime}</p>
            <span>Tags: {this.renderTags(photo.metadata)}</span>
          </div>
        );
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="dashboard">
        <div className="container">
          <div className="filter">
            <h2>Collection of Photos Here</h2>
            <div className="filter-search-form">
              <TagInput
                values={["photos"]}
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
          {this.renderPhotos()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
