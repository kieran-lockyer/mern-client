export default (
  state = { isLoading: true },
  { type, tag, tags, relatedTags, isLoading }
) => {
  switch (type) {
    case "FETCH_TAGS":
      return tags;
    case "FETCH_TAG_IMAGE":
      return { ...state, tag, relatedTags, isLoading };
    default:
      return state;
  }
};
