import React from "react";

const EmbeddedSpotifyPlayer = ({ trackId, trackName, width = 300, height = 80, compact = false }) => {
  if (!trackId) return null;

  const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

  return (
    <div className={`spotify-embed ${compact ? 'compact' : ''}`} style={{ width }}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`Spotify player for ${trackName}`}
      />
      <style jsx>{`
        .spotify-embed {
          border-radius: 8px;
          overflow: hidden;
          background: #121212;
        }
        .spotify-embed.compact {
          width: fit-content;
        }
        .spotify-embed iframe {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default EmbeddedSpotifyPlayer;
