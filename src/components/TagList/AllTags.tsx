import React, { Component } from "react";
import {
  Colors,
  Icon,
  TagInput as Input,
  Button,
  Intent
} from "@blueprintjs/core";
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
  TagRow,
  Date
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
            <h3>{tags.label}</h3>
            <Date>
              <Moment format="MMMM D, YYYY">{tags.dateAdded}</Moment>
            </Date>
            <Link to={`/tags/${tags._id}`}>
              <Button intent={Intent.PRIMARY} text="Show Details" />
            </Link>
            <Button intent={Intent.NONE} style={{ marginLeft: "10px" }}>
              <Icon icon="flag" />
            </Button>
            <Button intent={Intent.DANGER} style={{ marginLeft: "10px" }}>
              <Icon icon="trash" />
            </Button>
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
    return (
      <Container>
        <Wrapper>
          <Header>
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
