import { useState, useEffect } from "react";
import { HeroCard } from "../hero/HeroCard";
import { useApi } from "../utils/api";
import { getFavorites } from "../services/favoriteService";

export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { makeRequest } = useApi();

  useEffect(() => {
    async function fetchFavorites() {
      try {
        setLoading(true);

        const data = await getFavorites(makeRequest);

        setFavorites(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <p
        className="text-xl text-gray-400
                text-lg"
      >
        Loading heroes...
      </p>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div
      className="
           bg-slate-950/80
            text-white
            border
            border-purple-500/30
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
        "
    >
      <h1
        className="
        text-5xl
        font-black
        mb-8
        bg-gradient-to-r
        from-pink-400
        via-blue-500
        to-cyan-400
        bg-clip-text
        text-transparent
        "
      >
        ❤️ My Favorite Heroes
      </h1>

      {favorites.length === 0 ? (
        <p
          className="
                text-gray-400
                text-lg
                "
        >
          No favorite heroes yet.
        </p>
      ) : (
        <div
          className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-6
                  

                    "
        >
          {favorites.map((favorite) => (
            <HeroCard key={favorite.id} hero={favorite.hero} />
          ))}
        </div>
      )}
    </div>
  );
}
