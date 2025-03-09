import React, { useState, useEffect } from "react";

type Track = {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
};

const SpotifyTopTracks: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  const accessToken = "BQD3F4J9W8on9EAkWbEcjwwRevOsxNlAAbhebXg7B6q8SFlx2hp6I-z1mYI4QBwQYQMuwGSuJOlj1jDr_k0qV-ZYlBp3Knt8hqIo5ZBO7YXK1iLBYO0di0FRVfVfmnHjiL7x9KKTyqkZzFT2eqB3mOgn-iYCS8lhf9-Hm9_w2ruAR95dKYnma33NvJbNbgR3CsIX3owDZMMCDM59g4dCw4Yp1-GTCRIGL-F0Dr5FHw3z2Lr9yzsTc_xCL5lrGX554kzZ2awQ3AE5RueuZOhKlU7qzzLyoEoaW79RejZhoKr_MnvG1qXtZKgHGU1Z";

  const fetchTopTracks = async () => {
    try {
      const res = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();
      setTracks(data.items || []);
    } catch (error) {
      console.error("Error fetching top tracks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  if (loading) return <p>Loading top tracks...</p>;

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">🎵 My Top 5 Tracks</h2>
      <ul className="space-y-4">
        {tracks.map((track, index) => (
          <li key={index} className="flex items-center gap-4">
            <img src={track.album.images[0].url} alt={track.name} className="w-16 h-16 rounded" />
            <div>
              <p className="font-bold">{track.name}</p>
              <p className="text-sm text-gray-400">{track.artists.map(artist => artist.name).join(", ")}</p>
              <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm">
                Listen on Spotify
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyTopTracks;