import React, { Component } from "react";
import * as actions from "../../actions";
import baseUrl from "../../api/baseurl";
import history from "../../history";

// 3rd party packages
import { connect } from "react-redux";
import Moment from "react-moment";
import { Button, Intent, Tag, Icon } from "@blueprintjs/core";
import styled from "styled-components";
import { Cube } from "react-preloaders";

class PhotoSingle extends Component<any, any> {
  componentDidMount() {
    this.props.fetchSinglePhoto(this.props.match.params.photoId);
  }

  renderTags() {
    const { photo } = this.props;
    return photo.tags.map((tag, id) => {
      return (
        <Row key={id}>
          <Label
            large
            interactive
            onClick={() => history.push(`/tag/${tag.tagId}`)}
          >
            <Icon icon="tag" style={{ marginRight: "7px" }} />
            {tag.label}
          </Label>
          <Confidence>
            Confidence: {(tag.confidence * 100).toFixed(2)}
          </Confidence>
          <TagID>Tag ID: {tag.tagId}</TagID>
        </Row>
      );
    });
  }

  public render() {
    const { photo } = this.props;

    if (photo && photo._id === this.props.match.params.photoId) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <h3>{photo._id}</h3>
            </Header>
            <PhotoBlock>
              <PhotoImg>
                <img
                  src={baseUrl + "/photos/image/" + photo._id}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </PhotoImg>
              <PhotoDetails>
                <p>
                  Date: <Moment format="D MMM YYYY">{photo.dateAdded}</Moment>
                </p>
                <h3>Tags</h3>
                {this.renderTags()}
              </PhotoDetails>
            </PhotoBlock>
            <div style={{ margin: "2rem" }}>
              <Button intent={Intent.PRIMARY} onClick={() => history.goBack()}>
                Go Back
              </Button>
            </div>
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

const PhotoBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 40%) 1fr;
  grid-gap: 1.5rem;
  margin: 2rem;
  @media only screen and (max-width: 50em) {
    display: flex;
    flex-direction: column;
  }
`;

const PhotoImg = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

const PhotoDetails = styled.div`
  color: #16263d;
  grid-column: 2 / -1;
  grid-row: 1 / -1;
`;

const Label = styled(Tag)`
  background: #2fa7a2 !important;
  color: white;
  text-decoration: none !important;
  &:hover {
    background: #219893 !important;
  }
`;

const Confidence = styled.p`
  margin: 7px 0;
`;

const TagID = styled.p`
  margin: 0;
`;

const Row = styled.div`
  padding: 1rem 0;
  border-bottom: 2px solid #eee;
`;

const mapStateToProps = state => ({
  photo: state.photos.photo
});

export default connect(
  mapStateToProps,
  actions
)(PhotoSingle);
