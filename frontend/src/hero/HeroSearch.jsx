import "react"
import { useState, useEffect } from "react"
import { HeroCard } from "./HeroCard"
import { useApi } from "../utils/api"
import {searchHeroes} from "../services/heroService"

export function HeroSearch() {

    const [heroName, setHeroName] = useState("")
    const [heroes, setHeroes] = useState([]);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const {makeRequest} =useApi()



    const searchHero = async () => {

        if (!heroName) return;

        

        try {

            setLoading(true);
            setError("");

            const data =
                await searchHeroes(
                    makeRequest,
                    heroName
                )


            setHeroes(data)
            
        } catch(err)  {
            console.log(err)

            setError(err.message);
            
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="
                max-w-5xl
                mx-auto
                text-center
                space-y-8
            ">


            <h1 className="
            text-6xl
            font-black
            text-white
            drop-shadow-lg
            ">
            Find Your Hero 🦸
            </h1>

            <p className="
            text-xl
            text-blue-100
            ">
            Discover amazing superheroes and their powers!
            </p>


            <input
                className="
               w-full
                p-4
                rounded-full
                bg-white
                text-gray-800
                border-4
                border-blue-300
                shadow-lg
                focus:outline-none
                focus:border-yellow-400
                "
                value={heroName}
                onChange={(e)=>setHeroName(e.target.value)}
                placeholder="Batman..."
            />
            <button

            className="
            bg-red-600
            text-white
            font-bold
            px-8
            py-3
            rounded-full
            border-4
            border-yellow-300
            shadow-lg
            hover:bg-red-700
            hover:scale-105
            active:scale-95
            transition
            "

            onClick={searchHero}

            >
            Search Hero 🚀
            </button>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

             <div className="grid grid-cols-3 gap-5">

            {
                heroes.map(hero=>(

                    <HeroCard
                        key={hero.id}
                        hero={hero}
                    />

                ))
            }

            </div>


        </div>
    )


}