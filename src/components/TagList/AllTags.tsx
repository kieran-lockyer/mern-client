import React, { Component } from "react";
import { Colors, Icon, TagInput as Input } from "@blueprintjs/core";
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
  componentDidMount() {
    this.props.fetchTags();
  }

  renderTags() {
    if (this.props.tags) {
      return this.props.tags.map((tags, id) => {
        return (
          <TagRow key={id}>
            <h3>{tags.tag}</h3>
            <p>
              <span>ImageID:</span>
              {tags.imageId}
            </p>
            <p>
              <Moment format="MMMM D, YYYY">{tags.dateAdded}</Moment>
            </p>
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
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags
});

export default connect(
  mapStateToProps,
  actions
)(AllTags);
