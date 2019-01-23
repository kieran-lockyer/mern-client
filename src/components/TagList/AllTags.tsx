import React, { Component } from "react";
import { Colors, Icon, TagInput as Input, Button } from "@blueprintjs/core";
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

  renderImages(images) {
    return images.map(image => {
      return <p>{image}</p>;
    });
  }

  renderTags() {
    if (this.props.tags) {
      return this.props.tags.map((tags, id) => {
        return (
          <TagRow key={id}>
            <h3>{tags.tag}</h3>
            <div>{this.renderImages(tags.images)}</div>
            <p>
              <Moment format="MMMM D, YYYY">{tags.dateAdded}</Moment>
            </p>
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
  tags: state.tags.docs,
  page: state.tags.page,
  nextPage: state.tags.nextPage,
  prevPage: state.tags.prevPage,
  hasPrevPage: state.tags.hasPrevPage,
  hasNextPage: state.tags.hasNextPage
});

export default connect(
  mapStateToProps,
  actions
)(AllTags);
