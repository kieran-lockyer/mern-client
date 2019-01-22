import React, { Component } from "react";
import { Icon, Colors, TagInput as Input, Tag } from "@blueprintjs/core";
import { connect } from "react-redux";
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
  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderTags(metadata) {
    return metadata.map((tag, id) => {
      return (
        <div>
          <Tag key={id} round onRemove={e => console.log(e)}>
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
            <Client>
              <Icon icon="user" color={Colors.BLUE1} iconSize={25} />
              {photo.client}
            </Client>
            <Date>
              <Moment format="MMMM D, YYYY">{photo.datetime}</Moment>
            </Date>
            {this.renderTags(photo.metadata)}
          </TagRow>
        );
      });
    }
  }

  render() {
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
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(
  mapStateToProps,
  actions
)(AllPhotos);
