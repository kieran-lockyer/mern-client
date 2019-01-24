import React, { Component } from "react";
import { Colors, Icon, TagInput as Input, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import * as actions from "../../actions";
import {
  Container,
  Wrapper,
  Header,
  SearchForm,
  Filter,
  TagRow
} from "./TagListStyles";

class AllTags extends Component<any, any> {
  state = {
    pageNum: this.props.page
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
          <TagRow key={id}>
            <h3>{tags.tag}</h3>
            <p>
              <Moment format="MMMM D, YYYY">{tags.dateAdded}</Moment>
            </p>
            <Link to={`/tags/${tags.tag}`}>
              <Button text="Show Details" />
            </Link>
          </TagRow>
        );
      });
    }
  }

  renderPagination() {
    return (
      <div className="pagination">
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
      </div>
    );
  }

  prevPage = () => {
    this.setState({ pageNum: this.props.prevPage });
  };

  nextPage = () => {
    this.setState({ pageNum: this.props.nextPage });
  };

  render() {
    console.log(this.props.images);
    return (
      <Container>
        <Wrapper>
          <Header>
            <h2>TAG COLLECTION</h2>
            <SearchForm>
              <Input
                values={["Hello"]}
                fill
                large
                leftIcon="tag"
                placeholder="Filter by tags"
              />
            </SearchForm>
            <Filter>
              <Icon
                color={Colors.GRAY2}
                icon="sort-alphabetical"
                iconSize={25}
              />
              <Icon color={Colors.GRAY2} icon="sort" iconSize={25} />
            </Filter>
          </Header>
          {this.renderTags()}
          {this.renderPagination()}
        </Wrapper>
      </Container>
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
