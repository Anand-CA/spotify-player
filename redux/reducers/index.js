import { combineReducers } from "redux";
import albums from "./albums";
import track from "./track";

export default combineReducers({
  albums,
  track,
});
