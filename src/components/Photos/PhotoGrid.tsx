import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import { tagStyles } from "../../styles/AppStyles";
import baseUrl from "../../api/baseurl";
import { Colors, Tag } from "@blueprintjs/core";
import history from "../../history";

const getGalleryPhotos = imagesArr => {
  const images = [];
  imagesArr.forEach(function(object) {
    images.push({
      src: baseUrl + "/photos/image/" + object._id,
      thumbnail: baseUrl + "/photos/image/" + object._id,
      thumbnailWidth: "20%",
      thumbnailHeight: "20%",
      caption: object.tags.map((tags, id) => {
        const labels = tags.label.split(",").join(", ");
        return (
          <Tag
            key={id}
            interactive
            color={Colors.TURQUOISE3}
            style={tagStyles}
            onClick={() =>
              history.push(
                `/tag/${tags.label
                  .split(",")
                  .map(tag => tag)
                  .join(",")}`
              )
            }
          >
            {labels}
          </Tag>
        );
      }),
      tags: object.tags.map(tags => {
        const label = tags.label.split(",");
        return { value: label[0] };
      })
    });
  });
  return <Gallery images={images} backdropClosesModal tagStyle={tagStyles} />;
};

const PhotoGrid = props => getGalleryPhotos(props.photos);

export default PhotoGrid;
