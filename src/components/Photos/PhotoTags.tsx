import React from "react";
import { Tag } from "@blueprintjs/core";
import history from "../../history";
import styled from "styled-components";

const Label = styled(Tag)`
  background: #35b0ac !important;
  color: white;
  margin-right: 5px;

  &:hover {
    background: green;
  }
`;

const PhotoTags = props => {
  return props.tags.map((tag, id) => (
    <span key={id}>
      <Label interactive onClick={() => history.push(`/tag/${tag.tagId}`)}>
        {tag.label.split(",")[0]}
      </Label>
    </span>
  ));
};

export default PhotoTags;
