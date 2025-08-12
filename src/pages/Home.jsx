/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate } from "react-router-dom";
import BoxModels from "../components/BoxModels";

const Home = () => {
  const setPokedexScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      console.log("window.innerWidth in Home:", window.innerWidth);
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [skyScale, skyPosition, skyRotation] = setPokedexScreenSize();
  return (
    <div className="boxHome h-full w-full">
      <figure className="w-full h-full flex justify-center items-center align-middle shadow-zinc-950">
        <BoxModels
          skyScale={skyScale}
          skyPosition={skyPosition}
          skyRotation={skyRotation}
        />
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
