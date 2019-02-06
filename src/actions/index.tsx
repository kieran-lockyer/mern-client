import api from "../api";
import history from "../history";

// Fetch List of Tags + sort + pagination
export const fetchTags = (
  pageNum,
  limit,
  field,
  order,
  filterString
) => async dispatch => {
  const tagData = (await api.get(
    `tags?pageNo=${pageNum}&limit=${limit}&field=${field}&order=${order}&label=${filterString}`
  )).data;
  dispatch({
    type: "FETCH_TAGS",
    tagData,
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
  const photoData = (await api.get(
    `photos?pageNo=${pageNum}&limit=${limit}&field=${field}&order=${order}&tags=${filterString}`
  )).data;
  dispatch({
    type: "FETCH_PHOTOS",
    photoData,
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
  const relatedTags = (await api.get(
    `/tags/related/${tag && tag.label}`
  )).data.filter(tag => tag._id !== tagId);

  dispatch({
    type: "FETCH_SINGLE_TAG",
    tag,
    relatedTags
  });
};

// Fetch stats for dashboard
export const fetchStats = () => async dispatch => {
  const popTags = (await api.get("/stats/poptags")).data;
  const trendingTags = (await api.get("/stats/trendingtags")).data;
  const avgTags = (await api.get("/stats/avgtags")).data;
  const avgPhoto = (await api.get("/stats/avgphotos")).data;

  dispatch({
    type: "FETCH_STATS",
    popTags,
    trendingTags,
    avgTags,
    avgPhoto
  });
};

// Fetch data for the dashboard graph
export const fetchGraphData = (numOfDays, selection) => async dispatch => {
  const tagData = (await api.get(`/stats?model=tags&days=${numOfDays}`)).data;
  const photoData = (await api.get(`/stats?model=photos&days=${numOfDays}`))
    .data;
  dispatch({
    type: "FETCH_GRAPH_DATA",
    tagData,
    photoData,
    selection
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

// Set sorting option for photos e.g. by Confidence, A-Z
export const setPhotoOption = option => ({
  type: "SET_PHOTO_OPTION",
  option
});
// Set sorting option for tags e.g. by Confidence, A-Z
export const setTagOption = option => ({
  type: "SET_TAG_OPTION",
  option
});

// Delete Tag
export const deleteTag = tagId => dispatch => {
  history.push("/tags");
  return api
    .delete(`/tags/${tagId}`)
    .then(() => dispatch({ type: "DELETE_TAG", tagId }));
};

// Delete Photo
export const deletePhoto = photoId => dispatch => {
  history.push("/photos");
  return api
    .delete(`/photos/${photoId}`)
    .then(() => dispatch({ type: "DELETE_PHOTO", photoId }));
};

// Open Alert Box for Delete Button
export const toggleAlertBox = bool => ({
  type: "TOGGLE_ALERT",
  alertIsOpen: bool
});
