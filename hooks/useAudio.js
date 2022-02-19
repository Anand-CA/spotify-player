import { useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAudio = () => {
  const dispacth = useDispatch();
  //   const [audio] = useState(
  //     typeof Audio !== "undefined" && new Audio("/arabic-kuttu.mp3")
  //   );

  const audio = useSelector((state) => state.track.audio);
  console.log({ audio });
  const isPlaying = useSelector((state) => state.track.isPlaying);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => dispatch({ type: "PAUSE_TRACK" }));
    return () => {
      audio.removeEventListener("ended", () =>
        dispatch({ type: "PAUSE_TRACK" })
      );
    };
  }, []);

  return [isPlaying];
};

export default useAudio;
