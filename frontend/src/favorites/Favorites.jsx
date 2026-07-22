import { useState, useEffect } from "react";
import { HeroCard } from "../hero/HeroCard";
import {useApi} from "../utils/api"
import {
getFavorites
}
from "../services/favoriteService"

export function Favorites(){


    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {makeRequest}=useApi()




    useEffect(() => {

        async function fetchFavorites(){

            try {

            setLoading(true)


            const data =
            await getFavorites(
            makeRequest
            )

            setFavorites(data)

        } catch(err) {

            setError(err.message)
        } finally {

            setLoading(false)

        }

    }

        fetchFavorites();

    }, []);

        if (loading) {
        return (
            <p className="text-xl text-yellow-300">
                Loading heroes...
            </p>
        );
    }

    if (error) {
        return (
            <div>
                <p className="text-red-400">
                    {error}
                </p>
            </div>
        );
    }



    return (

        <div className="
            bg-white
            text-blue-900
            rounded-3xl
            p-8
            border-4
            border-yellow-400
            shadow-xl
        ">

            <h1 className="
                text-4xl
                font-bold
                mb-4
            ">
                My Favorite Heroes
            </h1>


            {
                favorites.length === 0 ? (
                    <p className="text-blue-100">
                        No favorite heroes yet.
                    </p>

                ) : (

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-6
                        text-blue-900

                    ">
                        {
                            favorites.map(favorite => (

                                <HeroCard 
                                    key={favorite.id}
                                    hero={favorite.hero}
                                />
                            ))
                        }

                        </div>

                )
        

            }


        </div>

    )

}