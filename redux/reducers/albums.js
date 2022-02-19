const initialState = {
  newReleases: [],
  newReleaseErr: null,
  album: {},
  albumErr: null,
  activeTrack: null,
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

    case "GET_ALBUM_SUCCESS":
      return {
        ...state,
        album: action.payload,
      };
    case "GET_ALBUM_FAILURE":
      return {
        ...state,
        albumErr: action.payload,
      };

    case "RESET_ALBUM":
      return {
        ...state,
        album: {},
      };

    default:
      return state;
  }
}
