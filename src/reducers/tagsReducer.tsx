const initialState = {
  alertIsOpen: false,
  filterData: {
    pageNum: 1,
    limit: 30,
    field: "dateAdded",
    order: "desc",
    option: "",
    tagInput: [],
    filterString: ""
  },
  tagData: { docs: [] }
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
    option,
    tagId,
    alertIsOpen
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
    case "FETCH_SINGLE_TAG":
      return { ...state, tag, relatedTags };
    case "DELETE_TAG":
      return {
        ...state,
        tagData: { docs: state.tagData.docs.filter(tag => tag._id !== tagId) }
      };
    case "TOGGLE_ALERT":
      return { ...state, alertIsOpen };
    default:
      return state;
  }
};
