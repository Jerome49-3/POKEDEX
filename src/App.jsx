import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import PokemonDetails from "./pages/PokemonDetails";
import Types from "./pages/Types";
import TypeDetails from "./pages/TypeDetails";

//layout
import MainLayout from "./mainLayout/MainLayout";

function App() {
  const [search, setSearch] = useState();
  return (
    <>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route element={<MainLayout search={search} setSearch={setSearch} />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/pokemons"
              element={<Pokemons search={search} setSearch={setSearch} />}
            />
            <Route
              path="/types"
              element={<Types search={search} setSearch={setSearch} />}
            />
            <Route path="/pokemon/:pokeName" element={<PokemonDetails />} />
            <Route path="/type/:id" element={<TypeDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
