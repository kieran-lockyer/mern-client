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
import Gallery from "react-grid-gallery";
import * as actions from "../../actions/";
import {
  Container,
  Wrapper,
  Header,
  SearchForm,
  TagRow,
  Date,
  Client
} from "./PhotoListStyles";
import { any } from "prop-types";
import baseUrl from '../../api/baseurl'

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

  // I don't understand where this is being used... from Kieran...
  renderPhotos() {
    if (this.props.photos) {
      return this.props.photos.map((photo, id) => {
        return (
          <TagRow key={id}>
            <img src={photo.id} alt="" />
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

    const images = [];
    this.props.images.forEach(function (object) {
      images.push({
        src: baseUrl + "/photos/image/" + object._id,
        thumbnail: baseUrl + "/photos/image/" + object._id,
        thumbnailWidth: '20%',
        thumbnailHeight: '20%',
        caption: object.tags.map(tags => {
          const labels = tags.label.split(",").join(", ") + ", ";
          return labels;
        }),
        tags: object.tags.map(tags => {
          const label = tags.label.split(",");
          return { value: label[0] };
        })
      });
    });

    return (
      <Container>
        <Wrapper>
          <Header>
            <SearchForm>
              <Input
                values={["photos"]}
                fill
                large
                leftIcon="tag"
                placeholder="Filter by tags"
              />
            </SearchForm>
            {this.renderPagination()}
          </Header>
          <div>
            <Gallery images={images} backdropClosesModal tagStyle={tagStyles} />
          </div>
        </Wrapper>
      </Container>
    );
  }
}

const tagStyles = {
  background: "#5c7080",
  color: "#fff",
  padding: " 2px 5px",
  fontSize: "12px",
  borderRadius: "5px"
};

const mapStateToProps = state => ({
  photos: state.photos.data.docs,
  page: state.photos.data.page,
  nextPage: state.photos.data.nextPage,
  prevPage: state.photos.data.prevPage,
  hasPrevPage: state.photos.data.hasPrevPage,
  hasNextPage: state.photos.data.hasNextPage,
  images: state.photos.images
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
