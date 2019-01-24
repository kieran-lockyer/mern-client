import * as React from "react";
import { Container, Wrapper, Header } from "./TagListStyles";
import * as actions from "../../actions";
import { connect } from "react-redux";
import baseUrl from '../../api/baseurl'
import Gallery from "react-grid-gallery";

class TagSingle extends React.Component<any, any> {
  componentDidMount() {
    this.props.fetchImages(this.props.match.params.tagname);
  }
  renderImages() {
    console.log(this.props.images)
    return this.props.images.map(tag => {
      return <img src={baseUrl + '/photos/image/' + tag.imageId} alt="image" width='40%' height='40%' />;
    });
  }

  public render() {

    console.log(this.props)
    const images = [];
    this.props.images.forEach(function (tag) {
      images.push({
        src: baseUrl + "/photos/image/" + tag.imageId,
        thumbnail: baseUrl + "/photos/image/" + tag.imageId,
        thumbnailWidth: '60%',
        thumbnailHeight: '60%',
        caption: ['Model: ' + tag.source.model + ' | ', 'Confidence: ' + (tag.confidence * 100).toFixed(2) + '% | ', 'Date: ' + tag.dateAdded],
        tags: [{ value: tag.source.type }]
      });
    });

    const tagStyles = {
      background: "#5c7080",
      color: "#fff",
      padding: " 2px 5px",
      fontSize: "12px",
      borderRadius: "5px",
      display: "inline-block"
    };

    return (
      <Container>
        <Wrapper>
          <Header>
            <h2>{this.props.match.params.tagname}</h2>
          </Header>
          <div>
            <Gallery images={images} backdropClosesModal tagStyle={tagStyles} />
          </div>
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
