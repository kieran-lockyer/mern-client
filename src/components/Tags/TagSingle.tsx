import React, { Component } from "react";
import * as actions from "../../actions";
import baseUrl from "../../api/baseurl";

// 3rd party packages
import { connect } from "react-redux";
import Moment from "react-moment";
import { Button, Intent } from "@blueprintjs/core";
import styled from "styled-components";
import { Cube } from "react-preloaders";

class TagSingle extends Component<any, any> {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props
      .fetchTagPhoto(this.props.match.params.tagname)
      .then(() =>
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000)
      )
      .catch(() => this.setState({ isLoading: false }));
  }

  public render() {
    const { image } = this.props;

    if (!this.state.isLoading && image) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <h3>{image[0].label}</h3>
            </Header>
            <TagBlock>
              <TagImg>
                <img
                  src={baseUrl + "/photos/image/" + image[0].imageId}
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
                  Date:{" "}
                  <Moment format="D MMM YYYY">{image[0].dateAdded}</Moment>
                </p>
                <p>
                  <strong>Type:</strong> {image[0].source.type}
                </p>
                <p>
                  <strong>Model:</strong> {image[0].source.model}
                </p>
                <p>
                  <strong>Confidence:</strong>{" "}
                  {(image[0].confidence * 100).toFixed(2)}
                </p>
              </TagDetails>
            </TagBlock>
            <Button intent={Intent.DANGER}>Go Back</Button>
          </Wrapper>
        </Container>
      );
    } else if (this.state.isLoading) {
      return (
        <Container>
          <Cube color={"#48c0b9"} bgColor={"transparent"} />
        </Container>
      );
    } else {
      return (
        <Container>
          <h2>This page doesn't exist!</h2>
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
  grid-template-columns: minmax(200px, 30vw) 1fr;
  grid-template-rows: 20vw;
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

const mapStateToProps = state => ({
  image: state.tags.image
});

export default connect(
  mapStateToProps,
  actions
)(TagSingle);
