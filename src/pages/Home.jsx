/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate } from "react-router-dom";
import BoxModels from "../components/BoxModels";

const Home = () => {
  return (
    <div className="boxHome h-full w-full">
      <figure className="w-full h-full flex justify-center items-center align-middle shadow-zinc-950">
        <BoxModels />
        <a
          href="/pokemons"
          className="w-full text-3xl font-bold text-red-950 text-shadow-zinc-300 text-shadow-lg drop-shadow-2xl text-center absolute top-[20%] left-[40%] translate-[-50%, -50%]"
        >
          Bienvenue dans ton pokedex !
        </a>
      </figure>
    </div>
  );
};

export default Home;
