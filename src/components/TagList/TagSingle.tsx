import * as React from "react";
import { Container, Wrapper, Header } from "./TagListStyles";
import * as actions from "../../actions";
import { connect } from "react-redux";

class TagSingle extends React.Component<any, any> {
  componentDidMount() {
    this.props.fetchImages(this.props.match.params.tagname);
  }
  renderImages() {
    return this.props.images.map(image => {
      return <img src={`${image.url}`} alt="image" />;
    });
  }
  public render() {
    return (
      <Container>
        <Wrapper>
          <Header>
            <h2>{this.props.match.params.tagname}</h2>
          </Header>
          <div className="image-collection">{this.renderImages()}</div>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  images: state.tags.images
});

export default connect(
  mapStateToProps,
  actions
)(TagSingle);
