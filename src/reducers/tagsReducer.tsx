export default (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_TAGS":
      return payload;
    case "FETCH_TAG_IMAGE":
      return { ...state, image: payload };
    default:
      return state;
  }
};
