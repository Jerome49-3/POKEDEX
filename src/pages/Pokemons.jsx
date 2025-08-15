/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useStateContext } from "../assets/lib/useStateContext";
import useCallApi from "../hookCustom/useCallApi";
//components
import { CardPoke } from "../components";
import LoaderPage from "../components/LoaderPage";

const Pokemons = () => {
  const [loading, setLoading] = useState(true);
  console.log("loading:", loading);

  const { search, setSearch } = useStateContext();
  // console.log("state in Pokemon:", state);
  // console.log(
  //   "VITE_REACT_APP_URL in Pokemon:",
  //   `${import.meta.env.VITE_REACT_APP_URL}`
  // );
  const statePokemon = useCallApi(
    "get",
    `${import.meta.env.VITE_REACT_APP_URL}/pokedex/pokemons`
  );
  console.log("statePokemon in pokemons:", statePokemon);

  return statePokemon?.loading ? (
    <LoaderPage />
  ) : (
    <>
      <main className="boxpokemons w-full h-full">
        <div className="wrapper w-full h-full">
          <div className="w-full h-full flex gap-10 flex-wrap justify-between py-5">
            {statePokemon?.data.map((pokemon, index) => {
              console.log("pokemon", pokemon);
              return (
                <Fragment key={index}>
                  <CardPoke
                    pokeName={pokemon.name}
                    pokeImg={pokemon.img}
                    // pokeId={pokemon.id}
                    href={pokemon.url}
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Pokemons;
