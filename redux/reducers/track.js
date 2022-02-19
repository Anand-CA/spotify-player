const initialState = {
  isPlaying: false,
  activeTrackId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ACTIVE_TRACKID":
      return {
        ...state,
        activeTrackId: action.payload,
      };

    case "PLAY_ACTIVE_TRACK":
      return {
        ...state,
        isPlaying: true,
      };

    case "PAUSE_ACTIVE_TRACK":
      return {
        ...state,
        isPlaying: false,
      };

    default:
      return state;
  }
}
