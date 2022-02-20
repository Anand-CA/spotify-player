import { combineReducers } from "redux";
import albums from "./albums";
import track from "./track";
import playlists from "./playlists";

export default combineReducers({
  albums,
  track,
  playlists,
});
