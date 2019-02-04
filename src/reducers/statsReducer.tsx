export default (
  state = { isLoading: true },
  { type, popTags, trendingTags, avgTags, avgPhoto }
) => {
  switch (type) {
    case "FETCH_STATS":
      return {
        ...state,
        popTags,
        trendingTags,
        avgTags,
        avgPhoto,
        isLoading: false
      };

    default:
      return state;
  }
};
