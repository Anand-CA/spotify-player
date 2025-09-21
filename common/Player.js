import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EmbeddedSpotifyPlayer from "../components/Album/EmbeddedSpotifyPlayer";

function Player() {
  const { activeTrackId } = useSelector((state) => state.track);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(!!activeTrackId);
  }, [activeTrackId]);

  if (!showPlayer || !activeTrackId) {
    return (
      <footer className="bg-[#282828] sticky bottom-0 col-span-2 p-4">
        <div className="flex items-center justify-center h-16">
          <p className="text-white/60">No track selected</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#282828] sticky bottom-0 col-span-2 p-4">
      <div className="w-full">
        <EmbeddedSpotifyPlayer
          trackId={activeTrackId}
          width="100%"
          height={152}
          
        />
      </div>
    </footer>
  );
}

export default Player;
