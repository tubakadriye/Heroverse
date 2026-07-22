import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useApi} from "../utils/api"
import {
    getHeroDetails,
    getHeroMovies
} from "../services/heroService"

import {
    addFavorite
} from "../services/favoriteService"


export function HeroDetails() {
    const { id } = useParams();
    const {makeRequest}=useApi()

    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [movies,setMovies]=useState([])


    useEffect(() => {
        async function loadHero() {
            try {
                const heroData =
            await getHeroDetails(
            makeRequest,
            id
            )

            setHero(heroData)

            try {

    const movieData =
    await getHeroMovies(
        makeRequest,
        id
    )

    setMovies(movieData.Search || [])

 }
 catch(error){

    console.log(
       "Movies unavailable",
       error
    )

    setMovies([])

 }
                
            } finally{

        setLoading(false)

    }          
        }

        loadHero();
    }, [id, makeRequest]);

    if(loading)
    return <h2>Loading...</h2>

    if (!hero) {
        return <h2>Hero not found</h2>;
    }

    const favorite = async()=>{

        await addFavorite(
            makeRequest,
            id
        )

        alert(
            "Added to favorites"
        )

    }

    return (
        <div className="bg-white
                rounded-3xl
                p-8
                shadow-2xl
                border-4
                border-yellow-400
                space-y-6">

            <img
                src={hero.hero.image["url"]}
                alt={hero.hero.name}
                className="w-72
                rounded-2xl
                border-8
                border-red-500
                shadow-xl
                text-gray-400
                "
            />

            <div>
                <h1 className="text-4xl font-bold text-blue-800">
                    {hero.hero.name}
                </h1>

                <p className="text-blue-800">
                    Full Name: {hero.biography?.["full-name"]}
                </p>

                
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-blue-800">
                    Biography
                </h2>
                <p className="text-blue-800"> Publisher : {hero.biography?.["publisher"]}</p>

                <p className="text-blue-800">Place of Birth : {hero.biography["place-of-birth"]}</p>
            </div>

            <div className="
            grid
            grid-cols-2
            gap-4
            ">

                <div className="
                bg-blue-100
                rounded-xl
                p-4
                font-bold
                text-blue-800
                border-2
                border-blue-300
                "> 
                Intelligence: {hero.powerstats.intelligence}</div>
                <div className="
                bg-blue-100
                rounded-xl
                p-4
                font-bold
                text-blue-800
                border-2
                border-blue-300
                "> 
                Strength: {hero.powerstats.strength}</div>
                <div className="
                bg-blue-100
                rounded-xl
                p-4
                font-bold
                text-blue-800
                border-2
                border-blue-300
                "> 
                Speed: {hero.powerstats.speed}</div>
                <div className="
                bg-blue-100
                rounded-xl
                p-4
                font-bold
                text-blue-800
                border-2
                border-blue-300
                "> Power: {hero.powerstats.power}</div>

            </div>

           <button

            onClick={favorite}  

            className="
            bg-red-600
            text-white
            px-5
            py-3
            rounded-xl
            "

            >

            ❤️ Favorite

            </button>




        <h2 className="text-4xl font-bold text-red-800 ">
🎬 Movies
</h2>


<div className="
grid
grid-cols-3
gap-6
">

{
movies.map(movie => (

<div
key={movie.imdbID}
className="
bg-gray-100
rounded-xl
p-4
shadow
"
>

<img
src={
movie.Poster !== "N/A"
? movie.Poster
: "/no-image.png"
}
className="
rounded-xl
w-full
"
/>


<h3 className="
font-bold
text-xl
text-blue-900
mt-2
">
{movie.Title}
</h3>


<p className="text-blue-900">
Year: {movie.Year}
</p>


<p className="text-blue-900">
IMDb: {movie.imdbID}
</p>


</div>

))
}

</div>

</div>
            );
        }