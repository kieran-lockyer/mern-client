const initialState = ["tag 1", "tag 2"];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_TAGS":
      return [...state, ...payload];

    default:
      return state;
  }
};
