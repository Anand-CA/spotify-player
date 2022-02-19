import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Audio from "../hooks/Audio";
import useAudio from "../hooks/useAudio";
import axios from "../utils/axios";

function Player() {
  // redux
  const dispatch = useDispatch();
  const { activeTrackId, isPlaying } = useSelector((state) => state.track);

  // states
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [track, setTrack] = useState(null);

  // ref
  const audioRef = useRef(null);

  function playSong() {
    audioRef.current.play();
    dispatch({
      type: "PLAY_ACTIVE_TRACK",
    });
  }

  function pauseSong() {
    audioRef.current.pause();
    dispatch({
      type: "PAUSE_ACTIVE_TRACK",
    });
  }

  // useEffects

  useEffect(() => {
    if (activeTrackId) {
      axios.get(`/tracks/${activeTrackId}`).then((res) => {
        setTrack(res.data);
        playSong();
        console.log(res.data);
      });
    }
  }, [activeTrackId]);

  useEffect(() => {
    audioRef.current?.addEventListener("ended", () => pauseSong());

    return () => {
      audioRef.current?.removeEventListener("ended", () => pauseSong());
    };
  }, []);

  useEffect(() => {
    setProgressBarWidth((currentTime / duration) * 100 + "%");
  }, [currentTime, duration]);

  // useEffect(() => {
  //   playSong();
  // }, [activeTrackId]);

  function convertDuration(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  return (
    <footer
      
      className="bg-[#282828] sm:gap-0 gap-3 grid z-30 md:grid-cols-3 sticky bottom-0 col-span-2 p-3"
    >
      {/* grid item */}

      {track ? (
        <div className="flex self-center gap-5 items-center">
          <img
            height={50}
            width={50}
            src={track?.album?.images[0]?.url}
            alt=""
          />

          <div className="">
            <h3 className="font-semibold ">{track?.name}</h3>
            <p className="opacity-60 text-sm">
              {track.artists.map((a) => a.name).join(", ")}
            </p>
          </div>

          <svg
            className="h-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M7.6335 4.12072L8 4.51564L8.3665 4.12072L8.91212 3.53278C10.1564 2.19195 12.2047 2.15185 13.4966 3.44081C14.7985 4.7398 14.8392 6.89535 13.5853 8.24649L8.3665 13.87C8.16866 14.0832 7.83134 14.0832 7.6335 13.87L2.4147 8.24649C1.16081 6.89536 1.20146 4.7398 2.50339 3.44081C3.79527 2.15185 5.84356 2.19195 7.08788 3.53278L7.6335 4.12072Z"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className="h-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M1.35002 3.25V11.8H14.65V3.25H1.35002ZM1.35002 2.3H14.65C14.902 2.3 15.1436 2.40009 15.3218 2.57825C15.4999 2.75641 15.6 2.99804 15.6 3.25V12.75C15.6 13.002 15.4999 13.2436 15.3218 13.4218C15.1436 13.5999 14.902 13.7 14.65 13.7H1.35002C1.09807 13.7 0.856433 13.5999 0.678273 13.4218C0.500113 13.2436 0.400024 13.002 0.400024 12.75V3.25C0.400024 2.99804 0.500113 2.75641 0.678273 2.57825C0.856433 2.40009 1.09807 2.3 1.35002 2.3Z"
              fill="white"
            />
            <path
              opacity="0.5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.90002 8H13.7V10.85H9.90002V8Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        <div className="self-center pl-4">No active track ...</div>
      )}

      {/* grid item */}
      <div className="flex flex-col items-center gap-3">
        {/* controls */}
        <div className="flex items-center gap-6">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M2.15179 6.5L12.8483 12.675L12.8483 0.324998L2.15179 6.5Z"
                fill="white"
              />
              <rect
                x="2"
                y="12"
                width="2"
                height="11"
                transform="rotate(180 2 12)"
                fill="white"
              />
            </g>
          </svg>

          {isPlaying ? (
            <svg
              className="h-10"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={pauseSong}
            >
              <circle cx="32" cy="32" r="32" fill="white" />

              <path
                d="M27.4286 21.3333H24.381C23.5394 21.3333 22.8571 22.0155 22.8571 22.8571V41.1428C22.8571 41.9844 23.5394 42.6666 24.381 42.6666H27.4286C28.2702 42.6666 28.9524 41.9844 28.9524 41.1428V22.8571C28.9524 22.0155 28.2702 21.3333 27.4286 21.3333Z"
                fill="#121212"
              />
              <path
                d="M36.5714 22.3333H39.6191C39.9084 22.3333 40.1429 22.5678 40.1429 22.8571V41.1428C40.1429 41.4321 39.9084 41.6666 39.6191 41.6666H36.5714C36.2822 41.6666 36.0476 41.4321 36.0476 41.1428V22.8571C36.0476 22.5678 36.2822 22.3333 36.5714 22.3333Z"
                fill="#121212"
                stroke="#121212"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="h-10"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={playSong}
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <path
                d="M21.3334 17.3333V38.6667L38.6667 28L21.3334 17.3333Z"
                fill="#121212"
                stroke="#121212"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M11.8482 6.5L1.15173 0.325001V12.675L11.8482 6.5Z"
                fill="white"
              />
              <rect x="12" y="1" width="2" height="11" fill="white" />
            </g>
          </svg>
        </div>

        {/* progress bar */}
        <div className="flex w-full items-center gap-4 text-xs">
          <span className="opacity-60">{convertDuration(currentTime)}</span>
          {/* progress bar  */}
          <div className="bg-white/20 h-1.5 rounded-full overflow-hidden grow">
            <div
              style={{ width: progressBarWidth }}
              className="bg-white h-full"
            />
          </div>
          <span className="opacity-60">{convertDuration(duration)}</span>

          <Audio
            ref={audioRef}
            handleDuration={setDuration}
            handleCurrentTime={setCurrentTime}
            trackData={track?.preview_url}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    </footer>
  );
}

export default Player;
