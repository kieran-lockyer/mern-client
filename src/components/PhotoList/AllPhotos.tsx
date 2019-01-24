import React, { Component } from "react";
import {
  Icon,
  Colors,
  TagInput as Input,
  Tag,
  Button
} from "@blueprintjs/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";
import * as actions from "../../actions/";
import {
  Container,
  Wrapper,
  Header,
  SearchForm,
  Filter,
  TagRow,
  Date,
  Client
} from "./PhotoListStyles";

class AllPhotos extends Component<any, any> {
  state = {
    pageNum: 1,
    redirect: false,
    tag: ""
  };

  componentDidMount() {
    this.props.fetchPhotos(this.state.pageNum);
  }

  componentDidUpdate() {
    if (
      this.state.pageNum === this.props.nextPage ||
      this.state.pageNum === this.props.prevPage
    ) {
      this.props.fetchPhotos(this.state.pageNum);
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
            round
            interactive
            large
            onClick={() => this.handleOnClick(tag.tag)}
          >
            {tag.tag}
          </Tag>
        </div>
      );
    });
  }

  renderPhotos() {
    if (this.props.photos) {
      return this.props.photos.map((photo, id) => {
        return (
          <TagRow key={id}>
            <img src={photo.url} alt="" />
            <Client>{photo.client}</Client>
            <Date>
              <Moment format="MMMM D, YYYY">{photo.datetime}</Moment>
            </Date>
            {this.renderTags(photo.metadata)}
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
    if (this.state.redirect) {
      return <Redirect push to={`/tags/${this.state.tag}`} />;
    }
    return (
      <Container>
        <Wrapper>
          <Header>
            <h2>PHOTO COLLECTION</h2>
            <SearchForm>
              <Input
                values={["photos"]}
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

          {this.renderPhotos()}
          {this.renderPagination()}
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.docs,
  page: state.photos.page,
  nextPage: state.photos.nextPage,
  prevPage: state.photos.prevPage,
  hasPrevPage: state.photos.hasPrevPage,
  hasNextPage: state.photos.hasNextPage
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
