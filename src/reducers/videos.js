const videosReducerDefaultState = {
  fetching: false,
  fetched: false,
  error: null,
  nextPageToken: null,
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0
  },
  items: []
};

export default (state = videosReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS_PENDING':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_VIDEOS_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case 'FETCH_VIDEOS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        nextPageToken: action.payload.data.nextPageToken,
        pageInfo: action.payload.data.pageInfo,
        items: action.payload.data.items
      };
    default:
      return state;
  }
};
