import React, { Component } from "react";
import {
  Popover,
  Position,
  Menu,
  MenuItem,
  Tag,
  Icon,
  TagInput,
  Button,
  Intent,
  HTMLTable
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as Tags from "../../styles/AppStyles";
import Moment from "react-moment";
import history from "../../history";

class AllTags extends Component<any, any> {
  state = {
    pageNum: parseInt(this.props.match.params.page),
    tagInput: [],
    limit: 30,
    field: "",
    order: "",
    option: ""
  };

  componentDidMount() {
    this.props.fetchTags(1);
  }

  componentDidUpdate() {
    if (
      this.state.pageNum === this.props.nextPage ||
      this.state.pageNum === this.props.prevPage
    ) {
      this.props.fetchTags(this.state.pageNum);
    }
  }

  renderTags() {
    if (this.props.tags) {
      return this.props.tags.map((tags, id) => {
        return (
          <tr key={id}>
            <td className="tag-label">
              <Link
                to={`/tag/${tags.label}`}
                style={{ textDecoration: "none" }}
              >
                <Tag
                  large
                  interactive
                  style={{ background: "#2fa7a2", color: "white" }}
                >
                  {tags.label}
                </Tag>
              </Link>
            </td>
            <td className="tag-date">
              <Moment format="D MMM YYYY">{tags.dateAdded}</Moment>
            </td>
            <td className="tag-imageid">{tags.source.type}</td>
            <td>{(tags.confidence * 100).toFixed(2)}</td>
          </tr>
        );
      });
    }
  }

  renderTableView() {
    if (this.props.tags) {
      return (
        <HTMLTable condensed striped style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th className="tag-label">Label</th>
              <th className="tag-date">Date</th>
              <th className="tag-type">Type</th>
              <th className="tag-confidence">Confidence</th>
            </tr>
          </thead>
          <tbody>{this.renderTags()}</tbody>
        </HTMLTable>
      );
    }
  }

  filterTags = value => {
    const filterString = `${value}`;
    this.setState({ filterString });
    if (!filterString) {
      this.props.fetchTags(this.state.pageNum);
    } else {
      this.props.fetchTags(
        1,
        (this.state.limit = 30),
        (this.state.field = "dateAdded"),
        (this.state.order = "asc"),
        filterString
      );
    }
    this.setState({ tagInput: value });
  };

  renderPagination() {
    return (
      <Tags.Pagination>
        <Button
          icon="arrow-left"
          text="Back"
          intent={Intent.PRIMARY}
          disabled={!this.props.hasPrevPage}
          onClick={this.prevPage}
        />

        <Button
          rightIcon="arrow-right"
          intent={Intent.PRIMARY}
          text="Next"
          disabled={!this.props.hasNextPage}
          onClick={this.nextPage}
        />
      </Tags.Pagination>
    );
  }

  prevPage = () => {
    this.setState({ pageNum: this.props.prevPage });
    history.push(`/tags/${this.props.prevPage}`);
    this.props.fetchTags(this.props.prevPage);
  };

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

  sortBy(pageNum, limit = 30, field, order, tags = "", option) {
    this.setState({ field, order, tags, limit, option });
    this.props.fetchTags(pageNum, limit, field, order, tags);
  }

  render() {
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
              "confidence",
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
              "confidence",
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
              "label",
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
              "label",
              "desc",
              this.state.tagInput.join(","),
              "Tag Z-A"
            )
          }
        />
      </Menu>
    );

    return (
      <Tags.Container>
        <Tags.Wrapper>
          <Tags.Header>
            <Tags.SearchForm>
              <TagInput
                values={this.state.tagInput}
                onChange={value => this.filterTags(value)}
                addOnBlur
                className="search-tags"
                fill
                large
                leftIcon="tag"
                placeholder="Filter by tags"
              />
            </Tags.SearchForm>
            <Popover content={filterMenu} position={Position.BOTTOM}>
              <Button intent={Intent.PRIMARY} icon="sort" text="Sort" />
            </Popover>
          </Tags.Header>
          {this.renderTableView()}
          <Tags.Pagination>
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
          </Tags.Pagination>
        </Tags.Wrapper>
      </Tags.Container>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags.data.docs,
  page: state.tags.data.page,
  nextPage: state.tags.data.nextPage,
  prevPage: state.tags.data.prevPage,
  hasPrevPage: state.tags.data.hasPrevPage,
  hasNextPage: state.tags.data.hasNextPage,
  totalPages: state.tags.data.totalPages
});

export default connect(
  mapStateToProps,
  actions
)(AllTags);
