import { Link } from "react-router-dom";

export function HeroCard({ hero }) {
  if (!hero) return null;

  const image = `https://heroverse-api.onrender.com/heroes/${hero.superhero_id || hero.id}/image`;

  return (
    <Link to={`/hero/${hero.superhero_id || hero.id}`}>
      <div
        className="
        bg-gradient-to-br
        from-slate-900
        to-blue-950
        rounded-3xl
        p-5
        shadow-2xl
        border
        border-blue-400/30
        hover:border-yellow-400
        hover:shadow-yellow-500/20
        hover:scale-105
        transition
        w-72
        overflow-hidden
        "
      >
        <img
          src={image}
          alt={hero.name}
          className="
            rounded-2xl
            border-2
            border-yellow-400/70
            shadow-xl
            "
        />

        <h2
          className="
                text-2xl
                font-black
                text-cyan-300
                mt-4
            "
        >
          {hero.name}
        </h2>

        <p className="text-gray-400">{hero.biography?.["full-name"]}</p>

        <p className="text-blue-300">{hero.biography?.publisher}</p>
      </div>
    </Link>
  );
}
