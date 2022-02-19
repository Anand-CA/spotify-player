import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import useAudio from "../../hooks/useAudio";
import { setActiveTrack } from "../../redux/actions/albums";

function Songs({ album }) {
  const dispatch = useDispatch();

  return (
    <div className="py-3 bg-black/80 backdrop-blur-lg h-full">
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
              }`}
            >
              <td className="py-2 text-left px-5">{index + 1}</td>
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
