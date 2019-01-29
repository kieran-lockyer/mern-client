import React, { Component } from "react";
import {
  TagInput,
  Tag,
  Button,
  Popover,
  Menu,
  MenuItem,
  Position,
  Intent,
  Icon,
  Colors
} from "@blueprintjs/core";
import { connect } from "react-redux";
import Moment from "react-moment";
import Gallery from "react-grid-gallery";
import * as actions from "../../actions";
import * as Photos from "../../styles/AppStyles";
import { tagStyles } from "../../styles/AppStyles";
import baseUrl from "../../api/baseurl";
import history from "../../history";

class AllPhotos extends Component<any, any> {
  state = {
    pageNum: parseInt(this.props.match.params.page),
    redirect: false,
    tag: "",
    tagInput: [],
    isMain: true,
    layoutType: "list",
    isActive: Colors.GRAY3
  };

  componentDidMount() {
    this.props.fetchPhotos(this.state.pageNum);
  }

  componentDidUpdate() {
    if (
      this.state.pageNum === this.props.nextPage ||
      this.state.pageNum === this.props.prevPage
    ) {
      this.props.fetchPhotos(this.state.pageNum);
    }
  }

  handleOnClick = tag => {
    this.setState({ redirect: true, tag });
  };

  renderTags(tags) {
    return tags.map((tag, id) => {
      return (
        <div key={id}>
          <Tag
            color={Colors.TURQUOISE3}
            round
            style={{ marginRight: "5px", background: "#48bfb9" }}
            interactive
            large
            onClick={() =>
              history.push(
                `/tag/${tag.label
                  .split(",")
                  .map(t => t)
                  .join(",")}`
              )
            }
          >
            {tag.label.split(",")[0]}
          </Tag>
        </div>
      );
    });
  }

  renderPhotosList() {
    if (this.props.photos) {
      return this.props.photos.map((photo, id) => {
        return (
          <Photos.TagRow key={id}>
            <img
              src={baseUrl + "/photos/image/" + photo._id}
              alt=""
              className="photo-list-img"
            />
            <Photos.Date>
              <Moment format="D MMM YYYY">{photo.dateAdded}</Moment>
            </Photos.Date>
            {this.renderTags(photo.tags)}
          </Photos.TagRow>
        );
      });
    }
  }

  renderPhotosGrid(images) {
    return <Gallery images={images} backdropClosesModal tagStyle={tagStyles} />;
  }

  prevPage = () => {
    this.setState({ pageNum: this.props.prevPage });
    history.push(`/photos/${this.props.prevPage}`);
  };

  nextPage = () => {
    this.setState({ pageNum: this.props.nextPage });
    history.push(`/photos/${this.props.nextPage}`);
  };

  filterPhotos = value => {
    const filterString = `${value}`;
    if (!filterString) {
      this.props.fetchPhotos(this.state.pageNum);
    } else {
      this.props.filterPhotos(filterString);
    }
    this.setState({ tagInput: value });
  };

  getGalleryPhotos = allImages => {
    const images = [];
    allImages.forEach(function(object) {
      images.push({
        src: baseUrl + "/photos/image/" + object._id,
        thumbnail: baseUrl + "/photos/image/" + object._id,
        thumbnailWidth: "20%",
        thumbnailHeight: "20%",
        caption: object.tags.map((tags, id) => {
          const labels = tags.label.split(",").join(", ");
          return (
            <Tag
              key={id}
              interactive
              color={Colors.TURQUOISE3}
              style={tagStyles}
              onClick={() =>
                history.push(
                  `/tag/${tags.label
                    .split(",")
                    .map(tag => tag)
                    .join(",")}`
                )
              }
            >
              {labels}
            </Tag>
          );
        }),
        tags: object.tags.map(tags => {
          const label = tags.label.split(",");
          return { value: label[0] };
        })
      });
    });
    return images;
  };

  handleGridSelection = () => {
    if (this.state.layoutType === "list") {
      this.setState({ layoutType: "grid", isActive: Colors.TURQUOISE3 });
    } else {
      this.setState({ layoutType: "list", isActive: Colors.GRAY3 });
    }
  };

  render() {
    const images = this.getGalleryPhotos(this.props.images);
    const filterMenu = (
      <Menu>
        <MenuItem icon="calendar" text="By Date" />
        <MenuItem icon="sort-alphabetical" text="A-Z" />
      </Menu>
    );

    return (
      <Photos.Container>
        <Photos.Wrapper>
          <Photos.Header>
            <Icon
              icon="grid-view"
              color={this.state.isActive}
              style={{ marginRight: "1rem", cursor: "pointer" }}
              onClick={this.handleGridSelection}
              iconSize={25}
            />
            <Photos.SearchForm>
              <TagInput
                values={this.state.tagInput}
                onChange={value => this.filterPhotos(value)}
                className="search-tags"
                addOnBlur
                fill
                large
                leftIcon="tag"
                placeholder="Filter by tags"
              />
            </Photos.SearchForm>
            <Popover content={filterMenu} position={Position.BOTTOM}>
              <Button intent={Intent.PRIMARY} icon="filter" text="Filter" />
            </Popover>
          </Photos.Header>
          <div>
            {this.state.layoutType === "list" && this.renderPhotosList()}
            {this.state.layoutType === "grid" && this.renderPhotosGrid(images)}
          </div>
          {!this.state.tagInput[0] && (
            <Photos.Pagination>
              <Button
                icon="arrow-left"
                text="Back"
                disabled={!this.props.hasPrevPage}
                onClick={this.prevPage}
              />

              <Button
                rightIcon="arrow-right"
                className="btn-next"
                text="Next"
                disabled={!this.props.hasNextPage}
                onClick={this.nextPage}
              />
            </Photos.Pagination>
          )}
        </Photos.Wrapper>
      </Photos.Container>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.data.docs,
  page: state.photos.data.page,
  nextPage: state.photos.data.nextPage,
  prevPage: state.photos.data.prevPage,
  hasPrevPage: state.photos.data.hasPrevPage,
  hasNextPage: state.photos.data.hasNextPage,
  images: state.photos.images
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
