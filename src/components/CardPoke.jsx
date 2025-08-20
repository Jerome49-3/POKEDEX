// import { useState } from "react";
const CardPoke = ({ pokeName, pokeImg }) => {
  // const [onError, setOnError] = useState(false);
  return (
    <a
      href={`/pokemon/${pokeName}`}
      className="card card-side bg-base-100 shadow-sm w-[210px] h-[100px] w-[210px]"
    >
      <figure className="min-w-1/2">
        <img
          src={pokeImg}
          alt="une image de pokemon"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body block p-0 min-w-">
        <p className="card-title truncate min-w-0 block py-10">{pokeName}</p>
      </div>
    </a>
  );
};

export default CardPoke;
