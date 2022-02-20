import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import useAudio from "../../hooks/useAudio";
import { setActiveTrack } from "../../redux/actions/albums";

function Songs({ playlist }) {
  const dispatch = useDispatch();
  const activeTrackId = useSelector((state) => state.track.activeTrackId);
  const isPlaying = useSelector((state) => state.track.isPlaying);
  const playlistLoading = useSelector(
    (state) => state.playlists.playlistLoading
  );

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
          {playlistLoading
            ? Array(16)
                .fill(0)
                .map((_, index) => (
                  <tr>
                    <th className="py-2  px-5">
                      <div className="animate-pulse rounded-xl bg-white/10 w-3 h-4" />
                    </th>
                    <th>
                      <div className="animate-pulse h-4 w-32 bg-white/10 rounded-xl" />
                    </th>
                    <th></th>
                    <th>
                      <div className="animate-pulse h-4 w-16 bg-white/10 rounded-xl" />
                    </th>
                  </tr>
                ))
            : playlist?.tracks?.items?.map((t, index) => (
                <tr
                  key={t.track.id}
                  onClick={() => {
                    if (t.track.preview_url) {
                      dispatch({
                        type: "SET_ACTIVE_TRACKID",
                        payload: t.track.id,
                      });
                    }
                  }}
                  className={`hover:bg-white/10 select-none  ${
                    !t.track.preview_url && "opacity-30"
                  } ${t.track.id === activeTrackId && "text-green-500"} `}
                >
                  <td className="py-2  px-5">{index + 1}</td>
                  <td className={` `}>{t.track.name}</td>
                  <td>
                    {t.track.id === activeTrackId && isPlaying && (
                      <img
                        className="h-5 object-contain"
                        src="/active.gif"
                        alt=""
                      />
                    )}
                  </td>
                  <td className="">{convertDuration(t.track.duration_ms)}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
