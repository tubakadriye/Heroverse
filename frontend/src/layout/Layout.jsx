import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


export function Layout() {

  return (

    <div className="
        min-h-screen
        bg-blue-600
        text-white
        ">


      <header className="
        border-b
        border-yellow-300
        bg-blue-700/90  
        backdrop-blur
        sticky
        top-0
        z-50
      ">

        <div className="
          max-w-6xl
          mx-auto
          flex
          justify-between
          items-center
          p-4
        ">


          <Link
            to="/"
            className="
              text-3xl
            font-extrabold
            text-yellow-300
            drop-shadow-lg
            "
          >
            ⚡ HeroVerse
          </Link>


          <nav className="
            flex
            gap-6
          ">

            <Link
              to="/"
              className="
                text-white
                font-bold
                hover:text-yellow-300
                transition
              "
            >
              Search Heroes
            </Link>


            <Link
              to="/favorites"
              className="
                text-white
                font-bold
                hover:text-yellow-300
                transition
              "
            >
              Favorites
            </Link>


          </nav>


        </div>

      </header>



      <main className="
        max-w-6xl
        mx-auto
        p-6
      ">

        <Outlet />

      </main>


    </div>

  );

}