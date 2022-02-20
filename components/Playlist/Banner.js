import React from "react";
import { useSelector } from "react-redux";

function Banner({ playlist }) {
  const playlistLoading = useSelector(
    (state) => state.playlists.playlistLoading
  );
  return (
    <div className="py-32 px-5">
      {playlistLoading ? (
        <>
          <div className="animate-pulse bg-white/10 mb-3 w-12 h-4 rounded-xl"></div>
          <div className="animate-pulse bg-white/10 w-1/4 mb-2 h-8 rounded-full"></div>
          <div className="animate-pulse bg-white/10 w-16 mb-2 h-4 rounded-xl"></div>
          <div className="animate-pulse bg-white/10 w-12 h-4 rounded-xl"></div>
        </>
      ) : (
        <>
          <p className="uppercase text-xs mb-3">{playlist?.type}</p>
          <h1 className="text-6xl font-black mb-1">{playlist?.name}</h1>
          <p className="opacity-80">
            {playlist?.artists?.map((artist) => artist.name).join(", ")}
          </p>
          <ul className="flex items-center gap-6 opacity-80 text-sm">
            <li className="">{playlist?.tracks?.total} songs</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Banner;
