import React, { Component } from "react";
import * as actions from "../../actions";
import history from "../../history";
import TagSort from "./TagSort";

// 3rd Party Packages
import {
  Popover,
  Position,
  Tag,
  TagInput,
  Button,
  Icon,
  Intent
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import styled from "styled-components";
import { Cube } from "react-preloaders";

class AllTags extends Component<any, any> {
  componentDidMount() {
    const { filterData, fetchTags } = this.props;
    try {
      fetchTags(
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

  // Single row within the table
  tagRow() {
    if (this.props.tags) {
      return this.props.tags.map((tags, id) => {
        return (
          <GridRow key={id}>
            <GridLabel>
              <Link to={`/tag/${tags._id}`} style={{ textDecoration: "none" }}>
                <Label large interactive>
                  <Icon icon="tag" style={{ marginRight: "7px" }} />
                  {tags.label}
                </Label>
              </Link>
            </GridLabel>
            <span>
              <Moment format="D MMM YYYY">{tags.dateAdded}</Moment>
            </span>
            <span>{tags.source.type}</span>
            <span>{(tags.confidence * 100).toFixed(2)}</span>
          </GridRow>
        );
      });
    }
  }

  // Filter tags by tag input
  filterTags = value => {
    const { limit, order, field } = this.props.filterData;
    const { page, tagFilter } = this.props;
    const filterString = value.toString() || "";
    tagFilter(value);

    if (!filterString) {
      this.props.fetchTags(page, limit, field, order, filterString);
    } else {
      this.props.fetchTags(1, limit, field, order, filterString);
    }
  };

  // Back button
  prevPage = () => {
    const { filterData, prevPage } = this.props;
    const { limit, order, field, filterString } = filterData;
    history.push(`/tags/${prevPage}`);
    this.props.fetchTags(prevPage, limit, field, order, filterString);
  };

  // Next button
  nextPage = () => {
    const {
      nextPage,
      filterData: { filterString }
    } = this.props;

    switch (this.props.filterData.option) {
      case "Newest to Oldest":
        this.props.fetchTags(nextPage, 30, "dateAdded", "desc", filterString);
      case "Oldest to Newest":
        this.props.fetchTags(nextPage, 30, "dateAdded", "asc", filterString);
        break;
      case "Highest Confidence to Lowest Confidence":
        this.props.fetchTags(nextPage, 30, "confidence", "desc", filterString);
        break;
      case "Lowest Confidence to Highest Confidence":
        this.props.fetchTags(nextPage, 30, "confidence", "asc", filterString);
        break;
      case "Tag A-Z":
        this.props.fetchTags(nextPage, 30, "label", "asc", filterString);
        break;
      case "Tag Z-A":
        this.props.fetchTags(nextPage, 30, "label", "desc", filterString);
        break;
      default:
        this.props.fetchTags(nextPage, 30, "dateAdded", "desc", filterString);
    }
    history.push(`/tags/${nextPage}`);
  };

  render() {
    const { tags, hasNextPage, hasPrevPage } = this.props;
    const { tagInput } = this.props.filterData;

    if (tags) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <SearchForm>
                <SearchInput
                  values={tagInput}
                  onChange={value => this.filterTags(value)}
                  addOnBlur
                  fill
                  large
                  leftIcon="tag"
                  placeholder="Filter by tags"
                />
              </SearchForm>
              <Popover
                content={
                  <TagSort
                    tagInput={tagInput}
                    pageId={parseInt(this.props.match.params.id)}
                  />
                }
                position={Position.BOTTOM}
              >
                <Button intent={Intent.PRIMARY} icon="sort" text="Sort" />
              </Popover>
            </Header>

            <Table>
              <GridHeader>
                <span>Label</span>
                <span>Date</span>
                <span>Type</span>
                <span>Confidence</span>
              </GridHeader>
              <GridBody>{this.tagRow()}</GridBody>
            </Table>

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

// react-redux
const mapStateToProps = state => ({
  tags: state.tags.tagData.docs,
  page: state.tags.tagData.page,
  nextPage: state.tags.tagData.nextPage,
  prevPage: state.tags.tagData.prevPage,
  hasPrevPage: state.tags.tagData.hasPrevPage,
  hasNextPage: state.tags.tagData.hasNextPage,
  totalPages: state.tags.tagData.totalPages,
  filterData: state.tags.filterData
});

// Styled Components
const Table = styled.div`
  display: block;
  font-size: 14px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, minmax(max-content, 150px));
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
  justify-self: flex-start;
  margin-left: 1vw;
`;

const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, minmax(max-content, 150px));
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

const Label = styled(Tag)`
  background: #2fa7a2 !important;
  color: white;
  text-decoration: none !important;
  &:hover {
    background: #219893 !important;
  }
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

export default connect(
  mapStateToProps,
  actions
)(AllTags);
