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
  Intent
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import styled from "styled-components";
import { Cube } from "react-preloaders";

class AllTags extends Component<any, any> {
  state = {
    isLoading: true,
    pageNum: parseInt(this.props.match.params.page),
    tagInput: [],
    limit: 30,
    field: "",
    order: "",
    option: ""
  };

  componentDidMount() {
    this.props
      .fetchTags(1)
      .then(() =>
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000)
      )
      .catch(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate() {
    if (
      this.state.pageNum === this.props.nextPage ||
      this.state.pageNum === this.props.prevPage
    ) {
      this.props.fetchTags(this.state.pageNum);
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
    const filterByString = `${value}`;
    this.setState({ filterByString });
    if (!filterByString) {
      this.props.fetchTags(this.state.pageNum);
    } else {
      this.props.fetchTags(
        1,
        (this.state.limit = 30),
        (this.state.field = "dateAdded"),
        (this.state.order = "asc"),
        filterByString
      );
    }
    this.setState({ tagInput: value });
  };

  // Back button
  prevPage = () => {
    this.setState({ pageNum: this.props.prevPage });
    history.push(`/tags/${this.props.prevPage}`);
    this.props.fetchTags(this.props.prevPage);
  };

  // Next button
  nextPage = () => {
    switch (this.state.option) {
      case "Newest to Oldest":
        this.props.fetchTags(this.props.nextPage, 30, "dateAdded", "desc");
        break;
      case "Oldest to Newest":
        this.props.fetchTags(this.props.nextPage, 30, "dateAdded", "asc");
        break;
      case "Highest Confidence to Lowest Confidence":
        this.props.fetchTags(this.props.nextPage, 30, "confidence", "desc");
        break;
      case "Lowest Confidence to Highest Confidence":
        this.props.fetchTags(this.props.nextPage, 30, "confidence", "asc");
        break;
      case "Tag A-Z":
        this.props.fetchTags(this.props.nextPage, 30, "label", "asc");
        break;
      case "Tag Z-A":
        this.props.fetchTags(this.props.nextPage, 30, "label", "desc");
        break;
      default:
        this.props.fetchTags(this.props.nextPage, 30, "dateAdded", "desc");
    }
    this.setState({ pageNum: this.props.nextPage });
    history.push(`/tags/${this.props.nextPage}`);
  };

  render() {
    const { tags, hasNextPage, hasPrevPage } = this.props;
    const { tagInput, isLoading } = this.state;

    if (!isLoading && tags) {
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
                content={<TagSort tagInput={tagInput} />}
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
                disabled={!hasPrevPage || tagInput[0]}
                onClick={this.prevPage}
              />

              <Button
                rightIcon="arrow-right"
                intent={Intent.PRIMARY}
                className="btn-next"
                text="Next"
                disabled={!hasNextPage || tagInput[0]}
                onClick={this.nextPage}
              />
            </Pagination>
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

// react-redux
const mapStateToProps = state => ({
  tags: state.tags.docs,
  page: state.tags.page,
  nextPage: state.tags.nextPage,
  prevPage: state.tags.prevPage,
  hasPrevPage: state.tags.hasPrevPage,
  hasNextPage: state.tags.hasNextPage,
  totalPages: state.tags.totalPages
});

export default connect(
  mapStateToProps,
  actions
)(AllTags);
