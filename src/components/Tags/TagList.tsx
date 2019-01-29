import React, { Component } from "react";
import {
  Popover,
  Position,
  Menu,
  MenuItem,
  Icon,
  TagInput,
  Button,
  Intent
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as Tags from "../../styles/AppStyles";

class AllTags extends Component<any, any> {
  state = {
    pageNum: this.props.page,
    tagInput: []
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
          <Tags.TagRow key={id}>
            <h3>{tags.label}</h3>
            <Link to={`/tag/${tags.label}`}>
              <Button intent={Intent.PRIMARY} text="Show Details" />
            </Link>
            <Button intent={Intent.DANGER} style={{ marginLeft: "10px" }}>
              <Icon icon="trash" />
            </Button>
          </Tags.TagRow>
        );
      });
    }
  }

  renderPagination() {
    return (
      <Tags.Pagination>
        <Button
          icon="arrow-left"
          text="Back"
          disabled={!this.props.hasPrevPage}
          onClick={this.prevPage}
        />

        <Button
          rightIcon="arrow-right"
          text="Next"
          disabled={!this.props.hasNextPage}
          onClick={this.nextPage}
        />
      </Tags.Pagination>
    );
  }

  prevPage = () => {
    this.setState({ pageNum: this.props.prevPage });
  };

  nextPage = () => {
    this.setState({ pageNum: this.props.nextPage });
  };

  render() {
    const filterMenu = (
      <Menu>
        <MenuItem icon="calendar" text="By Date" />
        <MenuItem icon="sort-alphabetical" text="A-Z" />
      </Menu>
    );
    return (
      <Tags.Container>
        <Tags.Wrapper>
          <Tags.Header>
            <Tags.SearchForm>
              <TagInput
                values={this.state.tagInput}
                onChange={(tagInput: string[]) => this.setState({ tagInput })}
                addOnBlur
                fill
                large
                leftIcon="tag"
                placeholder="Filter by tags"
              />
            </Tags.SearchForm>
            <Popover content={filterMenu} position={Position.BOTTOM}>
              <Button intent={Intent.PRIMARY} icon="filter" text="Filter" />
            </Popover>
          </Tags.Header>
          {this.renderTags()}
          {this.renderPagination()}
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
  hasNextPage: state.tags.data.hasNextPage
});

export default connect(
  mapStateToProps,
  actions
)(AllTags);
