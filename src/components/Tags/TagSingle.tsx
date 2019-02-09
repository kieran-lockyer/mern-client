import React, { Component } from "react";
import * as actions from "../../actions";
import baseUrl from "../../api/baseurl";
import history from "../../history";
import RelatedTags from "./RelatedTags";

// 3rd party packages
import { connect } from "react-redux";
import Moment from "react-moment";
import { Button, Intent, Icon, Alert } from "@blueprintjs/core";
import styled from "styled-components";
import { Cube } from "react-preloaders";

class TagSingle extends Component<any, any> {
  componentDidMount() {
    this.props.fetchSingleTag(this.props.match.params.tagId);
  }

  handleTagDelete = tagId => {
    this.props.toggleAlertBox(false);
    this.props.deleteTag(tagId);
  };

  public render() {
    const { tag } = this.props;

    if (tag && tag._id === this.props.match.params.tagId) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <h3>{tag.label}</h3>
              <Button
                intent={Intent.DANGER}
                onClick={() => this.props.toggleAlertBox(true)}
              >
                <Icon icon="trash" iconSize={21} />
              </Button>
              <Alert
                cancelButtonText="Cancel"
                confirmButtonText="Move to Trash"
                icon="trash"
                isOpen={this.props.isOpen}
                onCancel={() => this.props.toggleAlertBox(false)}
                onConfirm={() => this.handleTagDelete(tag._id)}
                intent={Intent.DANGER}
              >
                <p>
                  Are you sure you want to delete this tag: <br />{" "}
                  <strong>{tag.label}</strong>?
                </p>
              </Alert>
            </Header>
            <TagBlock>
              <TagImg>
                <img
                  src={baseUrl + "/photos/image/" + tag.imageId}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </TagImg>

              <TagDetails>
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
                  <strong>Confidence:</strong>{" "}
                  {(tag.confidence * 100).toFixed(2)}
                </p>
              </TagDetails>
            </TagBlock>
            <div style={{ margin: "2rem" }}>
              <Button intent={Intent.PRIMARY} onClick={() => history.goBack()}>
                Go Back
              </Button>
            </div>

            <Related>
              <h3>Related Tags</h3>
              <RelatedTags />
            </Related>
          </Wrapper>
        </Container>
      );
    } else {
      return (
        <Container>
          <Cube color={"#48c0b9"} bgColor={"transparent"} />
        </Container>
      );
    }
  }
}

// Styled Components
const Container = styled.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 85%;
  background: #fff;
  max-width: 1300px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background: #172336;
  padding: 1rem 2rem;

  h3 {
    margin: 0;
  }
`;

const TagBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 40%) 1fr;
  grid-gap: 1.5rem;
  margin: 2rem;
  @media only screen and (max-width: 50em) {
    display: flex;
    flex-direction: column;
  }
`;

const TagImg = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

const TagDetails = styled.div`
  color: #16263d;
  grid-column: 2 / -1;
  grid-row: 1 / -1;
`;

const Related = styled.div`
  color: black;
  margin: 2rem;
`;

const mapStateToProps = state => ({
  tag: state.tags.tag,
  relatedTags: state.tags.relatedTags,
  isOpen: state.tags.alertIsOpen
});

export default connect(
  mapStateToProps,
  actions
)(TagSingle);
