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

    //console.log("FULL HERO RESPONSE:", hero);
    //console.log("IMAGE URL:", hero.hero.image);

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

    const imageUrl = hero.hero.image.url
    .match(/\((.*?)\)/)?.[1] 
    || hero.hero.image.url;

    //console.log("CLEAN IMAGE URL:", imageUrl);


    return (
        <div className="
        relative
        bg-slate-950/80
        rounded-3xl
        p-8
        shadow-2xl
        border
        border-purple-500/30
        backdrop-blur-xl
        space-y-8
        overflow-hidden
        ">

        <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top_left,_#9333ea33,_transparent_40%)]
        pointer-events-none
        ">
        </div>


        <div className="
        relative
        flex
        flex-col
        md:flex-row
        items-center
        gap-8
        ">


        <img
        src={hero.hero.image.url}
        alt={hero.hero.name}
        className="
        w-72
        rounded-3xl
        border
        border-cyan-400/40
        shadow-[0_0_40px_rgba(34,211,238,0.4)]
        "
        />


        <div className="text-center md:text-left">


        <h1 className="
        text-6xl
        font-black
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-pink-300
        bg-clip-text
        text-transparent
        drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]
        ">
        {hero.hero.name}
        </h1>
   
        </div>


        </div>

            <div className="
bg-slate-900/70
rounded-2xl
p-6
border
border-purple-500/30
space-y-4
">


<h2 className="
text-3xl
font-bold
text-cyan-300
">
Biography
</h2>


<p>
<span className="text-purple-300 font-bold">
Full Name:
</span>

{" "}
{hero.biography?.["full-name"]}

</p>


<p>
<span className="text-purple-300 font-bold">
Publisher:
</span>

{" "}
{hero.biography?.publisher}

</p>


<p>
<span className="text-purple-300 font-bold">
Birth Place:
</span>

{" "}
{hero.biography?.["place-of-birth"]}

</p>


<p>
<span className="text-purple-300 font-bold">
Alignment:
</span>

{" "}
{hero.biography?.alignment}

</p>


</div>

            <div className="
            grid
            grid-cols-2
            gap-4
            ">

            <div className="
            bg-purple-950/50
            rounded-xl
            p-4
            font-bold
            text-cyan-300
            border
            border-purple-400/30
            ">
                Intelligence: {hero.powerstats.intelligence}</div>
            <div className="
            bg-purple-950/50
            rounded-xl
            p-4
            font-bold
            text-cyan-300
            border
            border-purple-400/30
            ">
                Strength: {hero.powerstats.strength}</div>
            <div className="
            bg-purple-950/50
            rounded-xl
            p-4
            font-bold
            text-cyan-300
            border
            border-purple-400/30
            ">
                Speed: {hero.powerstats.speed}</div>
            <div className="
            bg-purple-950/50
            rounded-xl
            p-4
            font-bold
            text-cyan-300
            border
            border-purple-400/30
            ">
                Power: {hero.powerstats.power}</div>

            </div>

           <button

            onClick={favorite}  

            className="
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            text-white
            px-6
            py-3
            rounded-xl
            font-bold
            shadow-[0_0_20px_rgba(236,72,153,0.6)]
            hover:scale-105
            transition
            "

            >

            ❤️ Favorite

            </button>




                <h2 className="
        text-4xl
        font-black
        bg-gradient-to-r
        from-pink-400
        via-blue-500
        to-purple-200
        bg-clip-text
        text-transparent
        ">
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
bg-slate-900
rounded-2xl
p-4
border
border-purple-500/30
hover:border-cyan-400
transition
hover:scale-105
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
text-xl
font-bold
text-cyan-500
mt-3
">
{movie.Title}
</h3>


<p className="text-gray-400">
Year: {movie.Year}
</p>


<p className="text-gray-400">
IMDb: {movie.imdbID}
</p>


</div>

))
}

</div>

</div>
            );
        }