import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import useAudio from "../../hooks/useAudio";
import { setActiveTrack } from "../../redux/actions/albums";

function Songs({ album }) {
  const dispatch = useDispatch();
  const activeTrackId = useSelector((state) => state.track.activeTrackId);
  const isPlaying = useSelector((state) => state.track.isPlaying);

  function convertDuration(duration_ms) {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = Math.floor((duration_ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <div className="py-3 backdrop-blur-3xl bg-black/80 min-h-full">
      <table className="text-left">
        <thead className="border-b-2 border-white/10">
          <tr>
            <th className="py-2 text-left px-5 uppercase text-xs opacity-60">
              #
            </th>
            <th className="py-2 text-left w-full uppercase text-xs opacity-60">
              Title
            </th>
            <th className="pr-10"></th>
            <th className="py-2 text-left pr-8 -ml-5 uppercase text-xs opacity-60">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {album?.tracks?.items?.map((t, index) => (
            <tr
              key={t.id}
              onClick={() => {
                if (t.preview_url) {
                  dispatch({
                    type: "SET_ACTIVE_TRACKID",
                    payload: t.id,
                  });
                }
              }}
              className={`hover:bg-white/10 select-none  ${
                !t.preview_url && "opacity-30"
              } ${t.id === activeTrackId && "text-green-500"} `}
            >
              <td className="py-2  px-5">{index + 1}</td>
              <td className={` `}>{t.name}</td>
              <td>
                {t.id === activeTrackId && isPlaying && (
                  <img
                    className="h-5 object-contain"
                    src="/active.gif"
                    alt=""
                  />
                )}
              </td>
              <td className="">{convertDuration(t.duration_ms)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
