/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import useCallApi from "../hookCustom/useCallApi";
import Slider from "../components/Slider";
import { useStateContext } from "../assets/lib/useStateContext";
import { useState, useEffect } from "react";
import PlayerAudioBasic from "../components/PlayerAudioBasic";

const PokemonDetails = () => {
  const { pokeName } = useParams();
  // console.log("pokeName on PokemonDetails:", pokeName);
  const deps = [];
  const { imgsSlider, setImgsSlider, isLoading } = useStateContext();
  console.log("%cisLoading in pokemonDetails:", "color: yellow", isLoading);
  console.log("%cimgsSlider in pokemonDetails:", "color: yellow", imgsSlider);
  const statePokemon = useCallApi(
    "get",
    `${import.meta.env.VITE_REACT_APP_URL}/pokedex/pokemon/${pokeName}`,
    deps
  );
  console.log(
    "%cstatePokemon in pokemonDetails:",
    "color: yellow",
    statePokemon
  );
  const [latestCries, setLatestCries] = useState("");
  // console.log("latestCries in pokemonDetails:", latestCries);
  const [legacyCries, setLegacyCries] = useState("");
  // console.log("legacyCries in pokemonDetails:", legacyCries);
  const [pokename, setPokename] = useState("");
  // console.log("pokename in pokemonDetails:", pokename);
  const [imgsLength, setImgsLength] = useState(0);
  useEffect(() => {
    if (isLoading !== true) {
      setImgsSlider(statePokemon?.data?.images);
      setLatestCries(statePokemon?.data?.results?.cries?.latest);
      setLegacyCries(statePokemon?.data?.results?.cries?.legacy);
      setPokename(statePokemon?.data?.name);
      setImgsLength(statePokemon?.data?.imgsArrLength);
    }
  }, [isLoading, imgsSlider]);

  return (
    <div className="boxPokemonDetails w-full h-full">
      <div className="wrapper">
        <div className="top w-full h-1/2 text-center py-5 text-2xl">
          <h1 className="h-10">{pokename}</h1>
        </div>
        <div className="boxImgsPOkemon flex w-full h-1/2 justify-center items-center">
          <Slider imgsSlider={imgsSlider} imgsLength={imgsLength} />
        </div>
        <div className="bottom w-full h-1/2">
          <h3 className="h-10">Cris:</h3>
          <div className="boxCries w-full h-1/4 gap-2 flex justify-start items-center">
            <PlayerAudioBasic
              txtPlayerAudio="latest:"
              srcLinkAudio={latestCries}
            />
            <PlayerAudioBasic
              txtPlayerAudio="legacy:"
              srcLinkAudio={legacyCries}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
