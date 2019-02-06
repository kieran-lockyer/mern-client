import api from "../api";

// Fetch List of Tags + sort + pagination
export const fetchTags = (
  pageNum,
  limit,
  field,
  order,
  filterString
) => async dispatch => {
  const response = await api.get(
    `tags?pageNo=${pageNum}&limit=${limit}&field=${field}&order=${order}&label=${filterString}`
  );
  dispatch({
    type: "FETCH_TAGS",
    tagData: response.data,
    pageNum,
    limit,
    field,
    order,
    filterString
  });
};

// Fetch List of Photos + sort + pagination
export const fetchPhotos = (
  pageNum,
  limit,
  field,
  order,
  filterString
) => async dispatch => {
  const response = await api.get(
    `photos?pageNo=${pageNum}&limit=${limit}&field=${field}&order=${order}&tags=${filterString}`
  );
  dispatch({
    type: "FETCH_PHOTOS",
    photoData: response.data,
    pageNum,
    limit,
    field,
    order,
    filterString
  });
};

// Fetch single image and all related tag data
export const fetchSinglePhoto = photoId => async dispatch => {
  const photo = (await api.get(`photos/${photoId}`)).data[0];
  dispatch({
    type: "FETCH_SINGLE_PHOTO",
    photo
  });
};

// Fetch single image from tag id
export const fetchSingleTag = tagId => async dispatch => {
  const tag = (await api.get(`/tags/image/${tagId}`)).data[0];
  const relatedTags = (await api.get(`/tags/related/${tag.label}`)).data.filter(
    tag => tag._id !== tagId
  );

  dispatch({
    type: "FETCH_SINGLE_TAG",
    tag,
    relatedTags
  });
};

// Fetch stats for dashboard
export const fetchStats = () => async dispatch => {
  const popTags = await api.get("/stats/poptags");
  const trendingTags = await api.get("/stats/trendingtags");
  const avgTags = await api.get("/stats/avgtags");
  const avgPhotos = await api.get("/stats/avgphotos");

  dispatch({
    type: "FETCH_STATS",
    popTags: popTags.data,
    trendingTags: trendingTags.data,
    avgTags: avgTags.data,
    avgPhoto: avgPhotos.data
  });
};

// Fetch data for the dashboard graph
export const fetchGraphData = numOfDays => async dispatch => {
  const tagData = await api.get(`/stats?model=tags&days=${numOfDays}`);
  const photoData = await api.get(`/stats?model=photos&days=${numOfDays}`);
  dispatch({
    type: "FETCH_GRAPH_DATA",
    tagData: tagData.data,
    photoData: photoData.data
  });
};

// Change photo layout from list to grid
export const changeLayoutType = layoutType => ({
  type: "CHANGE_LAYOUT",
  layoutType
});

// Saves the tag input from search form
export const photoFilter = tag => ({
  type: "PHOTO_FILTER",
  tagInput: tag
});

// Saves the tag input from search form
export const tagFilter = tag => ({
  type: "TAG_FILTER",
  tagInput: tag
});

export const setPhotoOption = option => ({
  type: "SET_PHOTO_OPTION",
  option
});

export const setTagOption = option => ({
  type: "SET_TAG_OPTION",
  option
});
