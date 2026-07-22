import { Link } from "react-router-dom";

export function HeroCard({hero}) {

        if (!hero) return null;

        const image =
            hero.image?.url || hero.image;

return (
    <Link to={`/hero/${hero.superhero_id || hero.id}`}>

        <div className="
            bg-white
            rounded-3xl
            p-5
            shadow-2xl
            border-4
            border-yellow-400
            hover:-translate-y-2
            transition
            w-72
            overflow-hidden
        ">

            <img
                src={image}
                alt={hero.name}
                className="
                    rounded-2xl
                    border-4
                    border-red-500
                "
            />

            <h2 className="
                text-2xl
                font-black
                text-blue-700
            ">
                {hero.name}
            </h2>

            <p className="text-gray-400">
                {hero.biography?.["full-name"]}
            </p>

            <p className="text-red-500">
                {hero.biography?.publisher}
            </p>

        </div>

    </Link>
)
}