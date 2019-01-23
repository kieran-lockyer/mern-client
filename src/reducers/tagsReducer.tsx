const initialState = {
  data: [],
  images: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_TAGS":
      return { ...state, data: payload };
    case "FETCH_TAG_IMAGES":
      return { ...state, images: payload };
    default:
      return state;
  }
};
