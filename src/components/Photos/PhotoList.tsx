import React, { Component } from "react";
import {
  TagInput,
  Tag,
  Button,
  Popover,
  Menu,
  MenuItem,
  Position,
  HTMLTable,
  Intent,
  Icon,
  Colors
} from "@blueprintjs/core";
import { connect } from "react-redux";
import Moment from "react-moment";
import * as actions from "../../actions";
import * as Photos from "../../styles/AppStyles";
import baseUrl from "../../api/baseurl";
import history from "../../history";
import PhotoGrid from "./PhotoGrid";
import { Link } from "react-router-dom";

class AllPhotos extends Component<any, any> {
  state = {
    pageNum: parseInt(this.props.match.params.page),
    limit: 30,
    field: "",
    order: "",
    tags: "",
    filterString: "",
    tag: "",
    option: "",
    tagInput: [],
    layoutType: "list",
    isActive: Colors.GRAY3
  };

  componentDidMount() {
    this.props.fetchPhotos(this.state.pageNum);
  }

  componentDidUpdate() {
    if (
      (this.state.pageNum === this.props.nextPage ||
        this.state.pageNum === this.props.prevPage) &&
      this.state.tagInput.length === 0
    ) {
      this.props.fetchPhotos(
        this.state.pageNum,
        this.state.limit,
        this.state.field,
        this.state.order,
        this.state.tagInput.join(",")
      );
    }
  }

  renderTags(tags) {
    return tags.map((tag, id) => {
      return (
        <span key={id}>
          <Tag
            color={Colors.TURQUOISE3}
            round
            style={{ marginRight: "5px", background: "#48bfb9" }}
            interactive
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
        </span>
      );
    });
  }

  renderPhotosList() {
    if (this.props.photos) {
      return this.props.photos.map((photo, id) => {
        return (
          <tr key={id}>
            <td className="tag-image">
              <img
                src={baseUrl + "/photos/image/" + photo._id}
                alt=""
                className="photo-list-img"
              />
            </td>
            <td className="tag-name">{photo._id}</td>
            <td className="tag-date">
              <Moment format="D MMM YYYY">{photo.dateAdded}</Moment>
            </td>
            <td className="tag-group">{this.renderTags(photo.tags)}</td>
          </tr>
        );
      });
    }
  }

  renderTableView() {
    if (this.props.photos) {
      return (
        <HTMLTable condensed striped style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th className="tag-image">Image</th>
              <th className="tag-name">ID</th>
              <th className="tag-date">Date</th>
              <th className="tag-group">Tags</th>
            </tr>
          </thead>
          <tbody>{this.renderPhotosList()}</tbody>
        </HTMLTable>
      );
    }
  }

  prevPage = () => {
    this.setState({ pageNum: this.props.prevPage });
    history.push(`/photos/${this.props.prevPage}`);
    this.props.fetchPhotos(this.props.prevPage);
  };

  nextPage = () => {
    switch (this.state.option) {
      case "Newest to Oldest":
        this.props.fetchPhotos(this.props.nextPage, 30, "dateAdded", "desc");
        break;
      case "Oldest to Newest":
        this.props.fetchPhotos(this.props.nextPage, 30, "dateAdded", "asc");
        break;
      case "Highest Confidence to Lowest Confidence":
        this.props.fetchPhotos(
          this.props.nextPage,
          30,
          "tag.0.confidence",
          "desc"
        );
        break;
      case "Lowest Confidence to Highest Confidence":
        this.props.fetchPhotos(
          this.props.nextPage,
          30,
          "tag.0.confidence",
          "asc"
        );
        break;
      case "Tag A-Z":
        this.props.fetchPhotos(this.props.nextPage, 30, "tag.0.label", "asc");
        break;
      case "Tag Z-A":
        this.props.fetchPhotos(this.props.nextPage, 30, "tag.0.label", "desc");
        break;
      default:
        this.props.fetchPhotos(this.props.nextPage, 30, "dateAdded", "desc");
    }
    this.setState({ pageNum: this.props.nextPage });
    history.push(`/photos/${this.props.nextPage}`);
  };

  filterPhotos = value => {
    const filterString = `${value}`;
    this.setState({ filterString });
    if (!filterString) {
      this.props.fetchPhotos(this.state.pageNum);
    } else {
      this.props.fetchPhotos(
        1,
        (this.state.limit = 30),
        (this.state.field = "dateAdded"),
        (this.state.order = "asc"),
        filterString
      );
    }
    this.setState({ tagInput: value });
  };

  // Changes the layout from list to grid
  handleGridSelection = () => {
    if (this.state.layoutType === "list") {
      this.setState({ layoutType: "grid", isActive: Colors.TURQUOISE3 });
    } else {
      this.setState({ layoutType: "list", isActive: Colors.GRAY3 });
    }
  };

  sortBy(pageNum, limit = 30, field, order, tags = "", option) {
    this.setState({ field, order, tags, limit, option });
    this.props.fetchPhotos(pageNum, limit, field, order, tags);
  }

  render() {
    if (this.props.match.params.page > this.props.totalPages) {
      return (
        <Photos.Container
          style={{
            margin: "10rem auto",
            textAlign: "center"
          }}
        >
          <h2>This page number doesn't exist!</h2>
          <Button intent={Intent.PRIMARY}>
            <Link style={{ color: "white" }} to="/photos">
              Go Back
            </Link>
          </Button>
        </Photos.Container>
      );
    }

    const filterMenu = (
      <Menu>
        <MenuItem
          icon="sort-desc"
          text="Newest to Oldest"
          onClick={() =>
            this.sortBy(
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
            this.sortBy(
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
            this.sortBy(
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
            this.sortBy(
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
            this.sortBy(
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
            this.sortBy(
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
            {this.state.layoutType === "list" && this.renderTableView()}
            {this.state.layoutType === "grid" && (
              <PhotoGrid photos={this.props.photos} />
            )}
            {this.props.match.params.page > this.props.totalPages && (
              <div
                style={{
                  margin: "10rem auto",
                  textAlign: "center"
                }}
              >
                <h2>This page number doesn't exist!</h2>
              </div>
            )}
          </div>
          <Photos.Pagination>
            {!this.state.tagInput[0] &&
              this.props.match.params.page <= this.props.totalPages && (
                <>
                  <Button
                    icon="arrow-left"
                    intent={Intent.PRIMARY}
                    text="Back"
                    disabled={!this.props.hasPrevPage}
                    onClick={this.prevPage}
                  />

                  <Button
                    rightIcon="arrow-right"
                    intent={Intent.PRIMARY}
                    className="btn-next"
                    text="Next"
                    disabled={!this.props.hasNextPage}
                    onClick={this.nextPage}
                  />
                </>
              )}
          </Photos.Pagination>
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
  totalPages: state.photos.data.totalPages
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
