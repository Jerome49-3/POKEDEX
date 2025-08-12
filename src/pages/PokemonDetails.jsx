/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import useCallApi from "../hookCustom/useCallApi";

const PokemonDetails = () => {
  const { pokeName } = useParams();
  console.log("pokeName on PokemonDetails:", pokeName);
  const statePokemon = useCallApi(
    "get",
    `${import.meta.env.VITE_REACT_APP_URL}/pokedex/pokemon/${pokeName}`,
    "getPokemon"
  );
  console.log("statePokemon in pokemonDetails:", statePokemon);
  const latestCries = statePokemon?.state?.results?.cries?.latest;
  console.log("latestCries in pokemonDetails:", latestCries);
  const legacyCries = statePokemon?.state?.results?.cries?.legacy;
  console.log("legacyCries in pokemonDetails:", legacyCries);
  const pokename = statePokemon?.state?.results?.name;
  console.log("pokename in pokemonDetails:", pokename);
  return (
    <div className="boxPokemonDetails w-full h-full">
      <div className="wrapper">
        <div className="top w-full h-1/2">
          <h1 className="h-10">{pokename}</h1>
        </div>
        <div className="bottom w-full h-1/2">
          <h3 className="h-10">Cris:</h3>
          <div className="boxCries w-full h-1/4 gap-2 flex justify-start items-center">
            <figure className="gap-4 flex-col justify-start items-center">
              <figcaption>latest:</figcaption>
              <audio className="py-2" controls src={latestCries}></audio>
              <a href={latestCries}> Download audio </a>
            </figure>
            <figure className="gap-4 flex-col justify-start items-center">
              <figcaption>legacy:</figcaption>
              <audio className="py-2" controls src={legacyCries}></audio>
              <a href={legacyCries}> Download audio </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
