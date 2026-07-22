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
        try {

        

        await addFavorite(
            makeRequest,
            id
        )

        alert(
            "Added to favorites ❤️"
        )

        } catch(error) {
            alert(error.message)
        }

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
                src={`https://heroverse-api.onrender.com/heroes/${id}/image`}
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
            </div>

                        <div className="
            bg-gradient-to-r
            from-blue-100
            to-purple-100
            rounded-2xl
            p-6
            space-y-3
            ">

            <h2 className="
            text-3xl
            font-bold
            text-blue-900
            ">
            Biography
            </h2>


            <div>
            <span className="font-bold">
            Full Name:
            </span>

            {hero.biography?.["full-name"]}
            </div>


            <div>
            <span className="font-bold">
            Publisher:
            </span>

            {hero.biography?.publisher}
            </div>


            <div>
            <span className="font-bold">
            Birth Place:
            </span>

            {hero.biography?.["place-of-birth"]}
            </div>

            <div>
            <span className="font-bold">
            Alignment:
            </span>

            {hero.biography?.alignment}
            </div>

            </div>
            <div className="
            grid
            grid-cols-2
            gap-4
            ">
                {
                Object.entries(hero.powerstats).map(
                ([key,value])=>(

                <div 
                key={key}
                className="
                bg-blue-100
                rounded-xl
                p-4
                font-bold
                text-blue-800
                border-2
                border-blue-300
                "> 
                {key} : {value}

                </div>
                ))
                }

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