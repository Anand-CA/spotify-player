import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TrackCard({ t }) {
  const dispatch = useDispatch();
  const activeTrackId = useSelector((state) => state.track.activeTrackId);
  const isPlaying = useSelector((state) => state.track.isPlaying);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);
  return (
    <motion.div
      layout
      key={t.id}
      onClick={() => {
        if (t.preview_url) {
          dispatch({
            type: "SET_ACTIVE_TRACKID",
            payload: t.id,
          });
        }
      }}
      className={`${
        !t.preview_url && "opacity-50"
      }  flex items-center gap-3 py-2 px-5 cursor-pointer hover:bg-white/10 select-none`}
    >
      {/* content left */}
      <div className="flex-1 flex items-center gap-3">
        <img className="" src={t.album.images[2].url} alt="" />
        <p className={`${t.id === activeTrackId && "text-green-500"}`}>
          {t.name}
        </p>

        {t.id === activeTrackId && isPlaying && (
          <img className="h-5 object-contain" src="/active.gif" alt="" />
        )}
      </div>

      {!liked ? (
        <svg
          className={`h-6 w-6  ${!t.preview_url && "hidden"}`}
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleLike}
        >
          <path
            d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
            stroke="white"
            className="opacity-60"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          onClick={toggleLike}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.31804 5.31804C3.90017 5.7359 3.5687 6.23198 3.34255 6.77795C3.1164 7.32392 3 7.90909 3 8.50004C3 9.09099 3.1164 9.67616 3.34255 10.2221C3.5687 10.7681 3.90017 11.2642 4.31804 11.682L12 19.364L19.682 11.682C20.526 10.8381 21.0001 9.69352 21.0001 8.50004C21.0001 7.30656 20.526 6.16196 19.682 5.31804C18.8381 4.47412 17.6935 4.00001 16.5 4.00001C15.3066 4.00001 14.162 4.47412 13.318 5.31804L12 6.63604L10.682 5.31804C10.2642 4.90017 9.7681 4.5687 9.22213 4.34255C8.67616 4.1164 8.09099 4 7.50004 4C6.90909 4 6.32392 4.1164 5.77795 4.34255C5.23198 4.5687 4.7359 4.90017 4.31804 5.31804Z"
            fill="#66D36E"
            stroke="#66D36E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </motion.div>
  );
}

export default TrackCard;
