const initialState = {
  newReleases: [],
  newReleaseErr: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NEW_RELEASES_SUCCESS":
      return {
        ...state,
        newReleases: action.payload.albums.items,
      };
    case "GET_NEW_RELEASES_FAILURE":
      return {
        ...state,
        newReleaseErr: action.payload,
      };

    default:
      return state;
  }
}
