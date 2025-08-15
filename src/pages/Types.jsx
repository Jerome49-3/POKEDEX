import { useStateContext } from "../assets/lib/useStateContext";
import useCallApi from "../hookCustom/useCallApi";
import { Fragment } from "react";
//components
import { CardType } from "../components";
import LoaderPage from "../components/LoaderPage";

const Type = () => {
  const { search, setSearch } = useStateContext();

  const statePokemon = useCallApi(
    "get",
    `${import.meta.env.VITE_REACT_APP_URL}/pokedex/types`
  );
  console.log("statePokemon in pokemons:", statePokemon);

  return statePokemon?.loading ? (
    <LoaderPage />
  ) : (
    <>
      <main className="boxTypes p-10 h-full">
        <div className="wrapper w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="w-full h-full flex gap-10 flex-wrap justify-between">
            {statePokemon?.data.map((type, index) => {
              // console.log("type in Type", type);
              // console.log("index in Type", index);
              return (
                <Fragment key={index}>
                  <CardType type={type} index={index} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Type;
