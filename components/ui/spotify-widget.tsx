import React, { useState, useEffect } from "react";
import axios from "axios";
  
  type Track = {
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
    external_urls: { spotify: string };
  };
  
  const SpotifyWidget: React.FC = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const accessToken = "BQC9bPpTr4-A-oehnWbevwVZbkb4j_l_FfPgEJn24LT6tuzyzZwZr6sAR84gAhDjh6Ee8AX7nM_KT2qEUemNbq5LAxRmAmWTwtAK78EOiTKoPjavbtX0LMFueM8yTwIjzPAhH-Dabo8";
  
    useEffect(() => {
      const fetchRecentlyPlayed = async () => {
        try {
          const response = await axios.get<{ items: { track: Track }[] }>(
            "https://api.spotify.com/v1/me/player/recently-played?limit=1",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const lastTrack = response.data.items[0]?.track;
          setTrack(lastTrack || null);
        } catch (error) {
          console.error("Error fetching recently played track:", error);
        }
      };
  
      fetchRecentlyPlayed();
    }, []);
  
    if (!track) return <p>Loading last played song...</p>;
  
    return (
      <div className="p-4 bg-gray-900 text-white rounded-lg flex items-center gap-4">
        <img src={track.album.images[0].url} alt={track.name} className="w-16 h-16 rounded" />
        <div>
          <p className="font-bold">{track.name}</p>
          <p className="text-sm text-gray-400">{track.artists.map(artist => artist.name).join(", ")}</p>
          <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm">
            Listen on Spotify
          </a>
        </div>
      </div>
    );
  };
  
  export default SpotifyWidget;
  