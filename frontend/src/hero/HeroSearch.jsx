import "react";
import { useState, useEffect } from "react";
import { HeroCard } from "./HeroCard";
import { useApi } from "../utils/api";
import { searchHeroes } from "../services/heroService";

export function HeroSearch() {
  const [heroName, setHeroName] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { makeRequest } = useApi();

  const searchHero = async () => {
    if (!heroName) return;

    try {
      setLoading(true);
      setError("");

      const data = await searchHeroes(makeRequest, heroName);

      setHeroes(data);
    } catch (err) {
      console.log(err);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
                max-w-5xl
                mx-auto
                text-center
                space-y-8
            "
    >
      <h1
        className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-600
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]
            "
      >
        ⚡ Find Your Hero
      </h1>

      <p
        className="
            text-xl
            text-slate-300
            "
      >
        Discover amazing superheroes and their powers.
      </p>

      <input
        className="
                w-full
                p-4
                rounded-full
                bg-slate-900
                text-white
                border
                border-blue-400/30
                shadow-xl
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/40
                focus:outline-none
                "
        value={heroName}
        onChange={(e) => setHeroName(e.target.value)}
        placeholder="Batman..."
      />
      <button
        className="
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            text-white
            font-bold
            px-8
            py-3
            rounded-full
            shadow-lg
            shadow-purple-500/30
            hover:scale-105
            hover:shadow-cyan-400/50
            transition
            "
        onClick={searchHero}
      >
        Search Hero ⚡
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div className="grid grid-cols-3 gap-5">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
