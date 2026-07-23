import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout.jsx";

import { HeroSearch } from "./hero/HeroSearch.jsx";
import { HeroDetails } from "./hero/HeroDetails.jsx";
import { Favorites } from "./favorites/Favorites.jsx";

//import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HeroSearch />} />

        <Route path="/hero/:id" element={<HeroDetails />} />

        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
