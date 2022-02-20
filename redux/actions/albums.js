import axios from "../../utils/axios";

export const getNewReleases = () => async (dispatch) => {
  try {
    const res = await axios.get("/browse/new-releases");
    dispatch({ type: "GET_NEW_RELEASES_SUCCESS", payload: res.data });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: "GET_NEW_RELEASES_FAILURE",
      payload: error.response?.data,
    });
  }
};

export const resetNewReleases = () => (dispatch) => {
  dispatch({ type: "RESET_NEW_RELEASES" });
};

export const getAlbum = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/albums/${id}`);
    dispatch({ type: "GET_ALBUM_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({
      type: "GET_ALBUM_FAILURE",
      payload: error.response.data,
    });
  }
};

export const resetAlbum = () => (dispatch) => {
  dispatch({ type: "RESET_ALBUM" });
};
