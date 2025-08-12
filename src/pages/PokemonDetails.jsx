/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import useCallApi from "../hookCustom/useCallApi";

const PokemonDetails = () => {
  const { pokeName } = useParams();
  console.log("pokeName on PokemonDetails:", pokeName);

  const state = useCallApi(
    "get",
    `http://localhost:3000/pokedex/pokemon/${pokeName}`,
    "getPokemon"
  );
  console.log("state in pokemonDetails:", state);

  return <div>{state.count}</div>;
};

export default PokemonDetails;
