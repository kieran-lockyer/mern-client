import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import styled from "styled-components";
import baseUrl from "../../api/baseurl";

class RelatedTags extends Component<any, any> {
  renderRelatedTags() {
    if (this.props.tags) {
      return this.props.tags.map(tag => {
        return (
          <div style={{ display: "grid", gridTemplateRows: "300px 1fr" }}>
            <div>
              <img
                src={baseUrl + "/photos/image/" + tag.imageId}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
            <h3>{tag.label}</h3>
            <p>
              Date: <Moment format="D MMM YYYY">{tag.dateAdded}</Moment>
            </p>
            <p>
              <strong>Type:</strong> {tag.source.type}
            </p>
            <p>
              <strong>Model:</strong> {tag.source.model}
            </p>
            <p>
              <strong>Confidence:</strong> {(tag.confidence * 100).toFixed(2)}
            </p>
          </div>
        );
      });
    }
  }

  render() {
    return <RelatedTagDetails>{this.renderRelatedTags()}</RelatedTagDetails>;
  }
}

const mapStateToProps = state => ({
  tags: state.tags.relatedTags
});

const RelatedTagDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  &img {
    object-fit: cover;
  }
`;

export default connect(mapStateToProps)(RelatedTags);
