const initialState = {
  filterData: {
    pageNum: 1,
    limit: 30,
    field: "dateAdded",
    order: "desc",
    option: "",
    tagInput: [],
    filterString: ""
  },
  tagData: {}
};

export default (
  state = initialState,
  {
    type,
    tagData,
    pageNum,
    limit,
    field,
    order,
    filterString,
    tag,
    relatedTags,
    tagInput,
    option
  }
) => {
  switch (type) {
    case "FETCH_TAGS":
      return {
        ...state,
        tagData,
        filterData: {
          ...state.filterData,
          pageNum,
          limit,
          field,
          order,
          filterString
        }
      };
    case "TAG_FILTER":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          tagInput
        }
      };
    case "SET_TAG_OPTION":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          option
        }
      };
    case "FETCH_TAG_IMAGE":
      return { ...state, tag, relatedTags };
    default:
      return state;
  }
};
