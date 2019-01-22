import React, { Component } from "react";
import { Colors, Icon, TagInput } from "@blueprintjs/core";
import { connect } from "react-redux";
import * as actions from "../../actions";

class AllTags extends Component<any, any> {
  componentDidMount() {
    this.props.fetchTags();
  }

  renderTags() {
    if (this.props.tags) {
      return this.props.tags.map((tags, id) => {
        return (
          <div key={id} className="tag-item-list">
            <h3 className="tag-title">{tags.tag}</h3>
            <p className="tag-item-image">
              <span>ImageID:</span>
              {tags.imageId}
            </p>
            <p className="tag-item-date">{tags.dateAdded}</p>
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
            <h2>Collection of Tags Here</h2>
            <div className="filter-search-form">
              <TagInput
                values={["Hello"]}
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
          {this.renderTags()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags
});

export default connect(
  mapStateToProps,
  actions
)(AllTags);
