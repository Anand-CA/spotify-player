const initialState = {
  newReleases: [],
  newReleaseErr: null,
  newReleaseLoading: true,

  album: null,
  albumErr: null,
  albumLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NEW_RELEASES_SUCCESS":
      return {
        ...state,
        newReleases: action.payload.albums.items,
        newReleaseLoading: false,
      };
    case "GET_NEW_RELEASES_FAILURE":
      return {
        ...state,
        newReleaseErr: action.payload,
        newReleaseLoading: false,
      };

    case "RESET_NEW_RELEASES":
      return {
        ...state,
        newReleases: [],
        newReleaseLoading: true,
      };

    case "GET_ALBUM_SUCCESS":
      return {
        ...state,
        album: action.payload,
        albumLoading: false,
      };
    case "GET_ALBUM_FAILURE":
      return {
        ...state,
        albumErr: action.payload,
        albumLoading: false,
      };

    case "RESET_ALBUM":
      return {
        ...state,
        album: null,
        albumLoading: true,
      };

    default:
      return state;
  }
}
