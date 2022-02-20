import {
  GET_FEATURED_PLAYLIST_END,
  GET_FEATURED_PLAYLIST_FAILURE,
  GET_FEATURED_PLAYLIST_START,
  GET_FEATURED_PLAYLIST_SUCCESS,
} from "../constants/featuredPlaylist";

const initialState = {
  featuredPlaylists: [],
  featuredPlaylistLoading: true,
  featuredPlaylistError: null,

  playlist: null,
  playlistLoading: true,
  playlistError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEATURED_PLAYLIST_SUCCESS:
      return {
        ...state,
        featuredPlaylistLoading: false,
        featuredPlaylists: action.payload,
      };
    case GET_FEATURED_PLAYLIST_FAILURE:
      return {
        ...state,
        featuredPlaylistLoading: false,
        error: action.payload,
      };

    case "RESET_FEATURED_PLAYLISTS":
      return {
        ...state,
        featuredPlaylists: [],
        featuredPlaylistLoading: true,
      };

    //   individual playlist
    case "GET_PLAYLIST_SUCCESS":
      return {
        ...state,
        playlistLoading: false,
        playlist: action.payload,
      };
    case "GET_PLAYLIST_FAILURE":
      return {
        ...state,
        playlistLoading: false,
        playlistError: action.payload,
      };

    case "RESET_PLAYLIST":
      return {
        ...state,
        playlist: null,
        playlistLoading: true,
      };

    default:
      return state;
  }
}
