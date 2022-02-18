import axios from "../../utils/axios";

export const getNewReleases = () => async (dispatch) => {
  try {
    const res = await axios.get("/browse/new-releases");
    dispatch({ type: "GET_NEW_RELEASES_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({
      type: "GET_NEW_RELEASES_FAILURE",
      payload: error.response.data,
    });
  }
};
