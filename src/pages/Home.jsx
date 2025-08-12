/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import BoxModels from "../components/BoxModels";

const Home = () => {
  return (
    <div className="boxHome h-full w-full">
      <div
        className="hero h-full"
        style={{
          backgroundImage:
            "url(https://image.jeuxvideo.com/medias/165953/1659534301-7483-artwork.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content w-full h-full text-neutral-content text-center">
          <div className="rounded-sm w-full h-full">
            <figure className="mx-5 my-5 w-full h-[81%] text-2xl font-bold text-shadow-lg px-8 align-middle shadow-zinc-950">
              <BoxModels />
              Bienvenue dans ton pokedex !
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
