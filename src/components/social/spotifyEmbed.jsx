import React from "react";

export default function SpotifyEmbed({ artistId }) {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/artist/${artistId}?theme=0`}
      width="100%"
      height="352"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
