import React, { Component } from "react";
import * as actions from "../../actions";
import baseUrl from "../../api/baseurl";
import history from "../../history";
import PhotoGrid from "./PhotoGrid";
import PhotoTags from "./PhotoTags";
import PhotoSort from "./PhotoSort";

// 3rd party packages
import {
  TagInput,
  Button,
  Popover,
  Position,
  Intent,
  Icon,
  Colors
} from "@blueprintjs/core";
import { connect } from "react-redux";
import Moment from "react-moment";
import styled from "styled-components";
import { Cube } from "react-preloaders";
import { Link } from "react-router-dom";

class AllPhotos extends Component<any, any> {
  componentDidMount() {
    const { filterData, fetchPhotos } = this.props;
    try {
      fetchPhotos(
        parseInt(this.props.match.params.id),
        filterData.limit,
        filterData.field,
        filterData.order,
        filterData.filterString
      );
    } catch {
      err => console.error(err);
    }
  }

  photoRow() {
    if (this.props.photos) {
      return this.props.photos.map((photo, id) => {
        return (
          <GridRow key={id}>
            <span>
              <img
                src={baseUrl + "/photos/image/" + photo._id}
                alt=""
                style={photoListImg}
              />
            </span>
            <Link to={`/photo/${photo._id}`}>{photo._id}</Link>
            <span>
              <Moment format="D MMM YYYY">{photo.dateAdded}</Moment>
            </span>
            <GridLabel>{<PhotoTags tags={photo.tags} />}</GridLabel>
          </GridRow>
        );
      });
    }
  }

  // Back button
  prevPage = () => {
    const { filterData, prevPage } = this.props;
    const { limit, order, field, filterString } = filterData;
    history.push(`/photos/${prevPage}`);
    this.props.fetchPhotos(prevPage, limit, field, order, filterString);
  };

  // Next button
  nextPage = () => {
    const {
      nextPage,
      filterData: { filterString }
    } = this.props;

    switch (this.props.filterData.option) {
      case "Newest to Oldest":
        this.props.fetchPhotos(nextPage, 30, "dateAdded", "desc", filterString);
      case "Oldest to Newest":
        this.props.fetchPhotos(nextPage, 30, "dateAdded", "asc", filterString);
        break;
      case "Highest Confidence to Lowest Confidence":
        this.props.fetchPhotos(
          nextPage,
          30,
          "tags.0.confidence",
          "desc",
          filterString
        );
        break;
      case "Lowest Confidence to Highest Confidence":
        this.props.fetchPhotos(
          nextPage,
          30,
          "tags.0.confidence",
          "asc",
          filterString
        );
        break;
      case "Tag A-Z":
        this.props.fetchPhotos(
          nextPage,
          30,
          "tags.0.label",
          "asc",
          filterString
        );
        break;
      case "Tag Z-A":
        this.props.fetchPhotos(
          nextPage,
          30,
          "tags.0.label",
          "desc",
          filterString
        );
        break;
      default:
        this.props.fetchPhotos(nextPage, 30, "dateAdded", "desc", filterString);
    }
    history.push(`/photos/${nextPage}`);
  };

  // Filter photos by tag input
  filterPhotos = value => {
    const { limit, order, field } = this.props.filterData;
    const { page, photoFilter } = this.props;
    const filterString = value.toString() || "";
    photoFilter(value);

    if (!filterString) {
      this.props.fetchPhotos(page, limit, field, order, filterString);
    } else {
      this.props.fetchPhotos(1, limit, field, order, filterString);
    }
  };

  // Changes the layout from list to grid
  handleLayout = () => {
    if (this.props.filterData && this.props.filterData.layoutType === "list") {
      this.props.changeLayoutType("grid");
    } else {
      this.props.changeLayoutType("list");
    }
  };

  render() {
    const { photos, hasPrevPage, hasNextPage, filterData } = this.props;
    const { layoutType, tagInput } = this.props.filterData;

    if (photos && filterData) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <Icon
                icon="grid-view"
                color={layoutType === "grid" ? Colors.TURQUOISE3 : Colors.GRAY3}
                style={{ marginRight: "1rem", cursor: "pointer" }}
                onClick={this.handleLayout}
                iconSize={25}
              />
              <SearchForm>
                <SearchInput
                  values={tagInput}
                  onChange={value => this.filterPhotos(value)}
                  addOnBlur
                  fill
                  large
                  leftIcon="tag"
                  placeholder="Filter by tags"
                />
              </SearchForm>
              <Popover
                content={
                  <PhotoSort
                    pageId={parseInt(this.props.match.params.id)}
                    tagInput={tagInput}
                  />
                }
                position={Position.BOTTOM}
              >
                <Button intent={Intent.PRIMARY} icon="sort" text="Sort" />
              </Popover>
            </Header>

            <div>
              {layoutType === "list" && (
                <Table>
                  <GridHeader>
                    <span>Image</span>
                    <span>ID</span>
                    <span>Date</span>
                    <span>Tags</span>
                  </GridHeader>
                  <GridBody>{this.photoRow()}</GridBody>
                </Table>
              )}
              {layoutType === "grid" && <PhotoGrid photos={photos} />}
            </div>

            <Pagination>
              <Button
                icon="arrow-left"
                intent={Intent.PRIMARY}
                text="Back"
                disabled={!hasPrevPage}
                onClick={this.prevPage}
              />

              <Button
                rightIcon="arrow-right"
                intent={Intent.PRIMARY}
                className="btn-next"
                text="Next"
                disabled={!hasNextPage}
                onClick={this.nextPage}
              />
            </Pagination>
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

const mapStateToProps = state => ({
  photos: state.photos.photoData.docs,
  page: state.photos.photoData.page,
  nextPage: state.photos.photoData.nextPage,
  prevPage: state.photos.photoData.prevPage,
  hasPrevPage: state.photos.photoData.hasPrevPage,
  hasNextPage: state.photos.photoData.hasNextPage,
  totalPages: state.photos.photoData.totalPages,
  filterData: state.photos.filterData
});

// Styled Components
const Table = styled.div`
  display: block;
  font-size: 14px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(3, minmax(max-content, 1fr));
  justify-items: center;
  align-items: center;
  padding: 10px 0;

  &:nth-child(2n) {
    background: #f6f8fa;
  }

  @media only screen and (max-width: 1049px) {
    display: flex;
    flex-direction: column;
  }
`;

const GridLabel = styled.div`
  justify-self: flex-end;
  margin-right: 1vw;
`;

const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(3, minmax(max-content, 1fr));
  justify-items: center;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding: 5px 0;
  font-size: 14px;
  @media only screen and (max-width: 1049px) {
    display: none;
  }
`;

const GridBody = styled.div`
  margin-bottom: 10px;
`;

const Container = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 85%;
  background: #fff;
  max-width: 1300px;
`;

const Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background: #172336;
  padding: 1rem 2rem;
`;

const SearchInput = styled(TagInput)`
  box-shadow: none !important;
  width: 65% !important;
  margin: 0 auto;
  background: #172336;
  border: 2px solid #919498;
  border-radius: 100px;
  transition: all 0.3s;
  & .bp3-tag {
    background: #2fa7a2 !important;
    color: white;
    text-decoration: none !important;
  }
`;

const SearchForm = styled.div`
  flex: 1 1;
  margin-right: 1rem;
  transition: all 0.3s;

  & .bp3-input.bp3-active {
    width: 75% !important;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #172336;
`;

const photoListImg = {
  height: "50px",
  width: "50px",
  borderRadius: "50%"
};

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
