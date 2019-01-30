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
    limit: undefined,
    field: "",
    order: "",
    tags: "",
    filterString: "",
    redirect: false,
    tag: "",
    option: "",
    tagInput: [],
    isMain: true,
    layoutType: "list",
    isActive: Colors.GRAY3
  };

  componentDidMount() {
    this.props.sortPhotos(this.state.pageNum);
  }

  componentDidUpdate() {
    if (
      this.state.pageNum === this.props.nextPage ||
      this.state.pageNum === this.props.prevPage
    ) {
      this.props.sortPhotos(
        this.state.pageNum,
        this.state.limit,
        this.state.field,
        this.state.order,
        this.state.tagInput.join(",")
      );
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
      console.log(this.props);
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

  prevPage = event => {
    this.setState({ pageNum: this.props.prevPage });
    history.push(`/photos/${this.props.prevPage}`);
    this.props.sortPhotos(this.props.prevPage);
  };

  nextPage = () => {
    switch (this.state.option) {
      case "Newest to Oldest":
        this.props.sortPhotos(this.props.nextPage, 30, "dateAdded", "desc");
        break;
      case "Oldest to Newest":
        this.props.sortPhotos(this.props.nextPage, 30, "dateAdded", "asc");
        break;
      case "Highest Confidence to Lowest Confidence":
        this.props.sortPhotos(
          this.props.nextPage,
          30,
          "tag.0.confidence",
          "desc"
        );
        break;
      case "Lowest Confidence to Highest Confidence":
        this.props.sortPhotos(
          this.props.nextPage,
          30,
          "tag.0.confidence",
          "asc"
        );
        break;
      case "Tag A-Z":
        this.props.sortPhotos(this.props.nextPage, 30, "tag.0.label", "asc");
        break;
      case "Tag Z-A":
        this.props.sortPhotos(this.props.nextPage, 30, "tag.0.label", "desc");
        break;
      default:
        this.props.sortPhotos(this.props.nextPage, 30, "dateAdded", "desc");
    }
    this.setState({ pageNum: this.props.nextPage });
    history.push(`/photos/${this.props.nextPage}`);
  };

  filterPhotos = value => {
    const filterString = `${value}`;
    this.setState({ filterString });
    if (!filterString) {
      this.props.sortPhotos(this.state.pageNum);
    } else {
      this.props.sortPhotos(
        this.state.pageNum,
        10,
        "dateAdded",
        "asc",
        filterString
      );
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
    return <Gallery images={images} backdropClosesModal tagStyle={tagStyles} />;
  };

  handleGridSelection = () => {
    if (this.state.layoutType === "list") {
      this.setState({ layoutType: "grid", isActive: Colors.TURQUOISE3 });
    } else {
      this.setState({ layoutType: "list", isActive: Colors.GRAY3 });
    }
  };

  menuClick(pageNum, limit = 30, field, order, tags = "", option) {
    this.setState({ field, order, tags, limit, option });
    this.props.sortPhotos(pageNum, limit, field, order, tags);
  }

  render() {
    const filterMenu = (
      <Menu>
        <MenuItem
          icon="sort-desc"
          text="Newest to Oldest"
          onClick={() =>
            this.menuClick(
              1,
              30,
              "dateAdded",
              "desc",
              this.state.tagInput.join(","),
              "Newest to Oldest"
            )
          }
        />
        <MenuItem
          icon="sort-asc"
          text="Oldest to Newest"
          onClick={() =>
            this.menuClick(
              1,
              30,
              "dateAdded",
              "asc",
              this.state.tagInput.join(","),
              "Oldest to Newest"
            )
          }
        />
        <MenuItem
          icon="sort-numerical-desc"
          text="Highest Confidence to Lowest Confidence"
          onClick={() =>
            this.menuClick(
              1,
              30,
              "tags.0.confidence",
              "desc",
              this.state.tagInput.join(","),
              "Highest Confidence to Lowest Confidence"
            )
          }
        />
        <MenuItem
          icon="sort-numerical"
          text="Lowest Confidence to Highest Confidence"
          onClick={() =>
            this.menuClick(
              1,
              30,
              "tags.0.confidence",
              "asc",
              this.state.tagInput.join(","),
              "Lowest Confidence to Highest Confidence"
            )
          }
        />
        <MenuItem
          icon="sort-alphabetical"
          text="Tag A-Z"
          onClick={() =>
            this.menuClick(
              1,
              30,
              "tags.0.label",
              "asc",
              this.state.tagInput.join(","),
              "Tag A-Z"
            )
          }
        />
        <MenuItem
          icon="sort-alphabetical-desc"
          text="Tag Z-A"
          onClick={() =>
            this.menuClick(
              1,
              30,
              "tags.0.label",
              "desc",
              this.state.tagInput.join(","),
              "Tag Z-A"
            )
          }
        />
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
              <Button intent={Intent.PRIMARY} icon="sort" text="Sort" />
            </Popover>
          </Photos.Header>
          <div>
            {this.state.layoutType === "list" && this.renderPhotosList()}
            {this.state.layoutType === "grid" &&
              this.getGalleryPhotos(this.props.photos)}
          </div>
          {!this.state.tagInput[0] && (
            <Photos.Pagination>
              <Button
                icon="arrow-left"
                text="Back"
                disabled={!this.props.hasPrevPage}
                onClick={event => this.prevPage(event)}
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
  hasNextPage: state.photos.data.hasNextPage
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
