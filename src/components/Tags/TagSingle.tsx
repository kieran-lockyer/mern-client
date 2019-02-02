import * as React from "react";
import * as Tags from "../../styles/AppStyles";
import * as actions from "../../actions";
import { connect } from "react-redux";
import baseUrl from "../../api/baseurl";
import moment from "moment";
class TagSingle extends React.Component<any, any> {
  componentDidMount() {
    this.props.fetchTagPhotos(this.props.match.params.tagname);
  }

  public render() {
    const images = [];
    this.props.images.forEach(function(tag) {
      images.push({
        title: tag.label,
        src: baseUrl + "/photos/image/" + tag.imageId,
        thumbnail: baseUrl + "/photos/image/" + tag.imageId,
        thumbnailWidth: 3000,
        thumbnailHeight: 2000,
        caption: [
          "Model: " + tag.source.model,
          "Confidence: " + (tag.confidence * 100).toFixed(2),
          "Date: " + tag.dateAdded
        ],
        tags: [{ value: tag.source.type }]
      });
    });

    return (
      <Tags.Container>
        <Tags.Wrapper>
          <Tags.Header>
            <h2 style={{ color: "white" }}>{images[0] && images[0].title}</h2>
          </Tags.Header>
          <div className="tag-block">
            <div className="tag-img">
              {images[0] && (
                <img
                  src={`${images[0].src}`}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
            <div className="tag-details">
              <p>{images[0] && images[0].caption[0]}</p>
              <p>{images[0] && images[0].caption[1]}</p>
              <p>{images[0] && images[0].caption[2]}</p>
            </div>
          </div>
        </Tags.Wrapper>
      </Tags.Container>
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
