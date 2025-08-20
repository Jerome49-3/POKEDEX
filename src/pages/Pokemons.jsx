/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, Fragment } from "react";
import { useStateContext } from "../assets/lib/useStateContext";
import useCallApi from "../hookCustom/useCallApi";
//components
import { CardPoke } from "../components";
import LoaderPage from "../components/LoaderPage";
import BtnSvgTwd from "../components/BtnSvgTwd";

//lib
import handlePgNext from "../assets/lib/handlePgNext";
import handlePgPrev from "../assets/lib/handlePgPrev";

const Pokemons = () => {
  const { search, setSearch, count, setCount, offset, setOffset } =
    useStateContext();
  // console.log(
  //   "VITE_REACT_APP_URL in Pokemon:",
  //   `${import.meta.env.VITE_REACT_APP_URL}`
  // );
  const deps = [offset];
  console.log("%cdeps in pokemons:", "color: red", deps);
  const statePokemon = useCallApi(
    "get",
    `${
      import.meta.env.VITE_REACT_APP_URL
    }/pokedex/pokemons?offset=${offset}&limit=20`,
    deps
  );
  console.log("%cstatePokemon in pokemons:", "color: red", statePokemon);

  useEffect(() => {
    if (statePokemon?.isLoading !== true) {
      setCount(statePokemon?.data?.count);
    }
  }, [statePokemon?.isLoading]);

  return statePokemon?.isLoading ? (
    <LoaderPage />
  ) : (
    <>
      <main className="boxpokemons w-full h-full">
        <div className="wrapper w-full h-full">
          <h1 className="text-center">Nombre de Pokemons: {count}</h1>
          <div className="w-full h-full flex gap-10 flex-wrap justify-between py-5 relative z-10 min-w-0">
            <BtnSvgTwd
              btnClass="btn btn-circle btnLeft z-20"
              svgWidth="24"
              svgHeight="20"
              svgColor="whitesmoke"
              svgPath="m15 18-6-6 6-6"
              handleClick={(e) => handlePgPrev(e, offset, setOffset, count)}
            />
            {statePokemon?.data?.results.map((pokemon, index) => {
              // console.log("%cpokemon", "color: red", pokemon);
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
            <BtnSvgTwd
              btnClass="btn btn-circle btnRight z-20"
              svgWidth="24"
              svgHeight="20"
              svgColor="whitesmoke"
              svgPath="m9 18 6-6-6-6"
              handleClick={(e) => handlePgNext(e, offset, setOffset, count)}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Pokemons;
