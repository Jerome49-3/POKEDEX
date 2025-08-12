/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useStateContext } from "../assets/lib/useStateContext";

//components
import { CardPoke } from "../components";

const Pokemon = () => {
  const [loading, setLoading] = useState(true);
  console.log("loading:", loading);

  const { state, dispatch } = useStateContext();
  // console.log("state in Pokemon:", state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_URL}/pokedex/pokemons`
        );
        if (response?.data) {
          console.log("response.date in Home:", response?.data);
          dispatch({ type: "getPokemons", data: response?.data });
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <p>...loading</p>
  ) : (
    <>
      <main className="boxpokemons">
        <div className="wrapper w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-full flex gap-10 flex-wrap justify-between pt-5 pb-20">
            {state?.results.map((pokemon, index) => {
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

export default Pokemon;
