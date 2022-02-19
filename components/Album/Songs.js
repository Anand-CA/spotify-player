import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import useAudio from "../../hooks/useAudio";
import { setActiveTrack } from "../../redux/actions/albums";

function Songs() {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.albums.album.tracks?.items);

  return (
    <div className="py-3">
      <table className="w-full">
        <thead className="border-b-2 border-white/10">
          <tr>
            <th className="py-2 text-left px-5 uppercase text-xs opacity-60">
              #
            </th>
            <th className="py-2 text-left uppercase text-xs opacity-60">
              Title
            </th>
            <th className="py-2 text-left uppercase text-xs opacity-60">
              Artist
            </th>
            <th className="py-2 text-left uppercase text-xs opacity-60">
              Album
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map((t) => (
            <tr
              key={t.id}
              onClick={() => {
                dispatch({
                  type: "SET_ACTIVE_TRACKID",
                  payload: t.id,
                });
              }}
              className="hover:bg-white/10 select-none"
            >
              <td className="py-2 text-left px-5">1</td>
              <td>{t.name}</td>
              <td>
                <p className="text-sm">
                  {t.artists.map((artist) => artist.name).join(", ")}
                </p>
              </td>
              <td>Album 1</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
