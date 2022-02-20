import {
  GET_FEATURED_PLAYLIST_FAILURE,
  GET_FEATURED_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAILURE,
  GET_PLAYLIST_SUCCESS,
} from "../constants/featuredPlaylist";
import axios from "../../utils/axios";

export const getFeaturedPlaylists = () => async (dispatch) => {
  try {
    const res = await axios.get(`/browse/featured-playlists`);
    console.log("...", res);
    dispatch({
      type: GET_FEATURED_PLAYLIST_SUCCESS,
      payload: res.data.playlists.items,
    });
  } catch (error) {
    dispatch({
      type: GET_FEATURED_PLAYLIST_FAILURE,
      payload: error?.response?.data,
    });
  }
};

export const resetFeaturedPlaylists = () => (dispatch) => {
  dispatch({ type: "RESET_FEATURED_PLAYLISTS" });
};

export const getPlaylist = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/playlists/${id}`);
    console.log("playlist >>>", res.data);
    dispatch({
      type: GET_PLAYLIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PLAYLIST_FAILURE,
      payload: error.response.data,
    });
  }
};

export const resetPlaylist = () => (dispatch) => {
  dispatch({ type: "RESET_PLAYLIST" });
};
