  import { Outlet } from "react-router-dom";
  import { Link } from "react-router-dom";

  export function Layout() {

  return (

  <div className="
  min-h-screen
  bg-slate-950
  text-white
  relative
  overflow-hidden
  ">


  {/* Background effects */}

  <div className="
  absolute
  inset-0
  bg-[radial-gradient(circle_at_top_left,_#7c3aed55,_transparent_35%)]
  ">
  </div>


  <div className="
  absolute
  inset-0
  bg-[radial-gradient(circle_at_bottom_right,_#06b6d455,_transparent_40%)]
  ">
  </div>


  <div className="
  absolute
  top-20
  left-1/2
  w-96
  h-96
  bg-purple-600/20
  blur-3xl
  rounded-full
  ">
  </div>



  <header className="
  relative
  border-b
  border-white/10
  bg-slate-950/70
  backdrop-blur-xl
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
  p-5
  ">


  <Link
  to="/"
  className="
  text-4xl
  font-black
  bg-gradient-to-r
from-cyan-400
  via-blue-500
  to-purple-600
  to-pink-500
  bg-clip-text
  text-transparent
  drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]
  "
  >

  ⚡ HeroVerse

  </Link>



  <nav className="
  flex
  gap-8
  ">


  <Link
  to="/"
  className="
  text-gray-200
  font-semibold
  hover:text-cyan-400
  transition
  "
  >
  Search Heroes
  </Link>



  <Link
  to="/favorites"
  className="
  text-gray-200
  font-semibold
  hover:text-purple-400
  transition
  "
  >
  Favorites
  </Link>


  </nav>


  </div>

  </header>



  <main className="
  relative
  max-w-6xl
  mx-auto
  p-6
  ">

  <Outlet />

  </main>



  </div>

  );

  }