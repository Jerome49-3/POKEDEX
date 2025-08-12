/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
//components
import Image from "./Image";
const CardType = ({ type, index }) => {
  const id = type.id;
  const href = type.url;
  const name = type.name;
  const typeImg = type.img;
  const figClass = "w-full rounded-box min-w-45";
  // console.log("spritesGen:", spritesGen);
  // console.log("spritesGen.length:", spritesGen.length);

  return (
    <a
      href={`/type/${id}`}
      className="card card-side bg-base-100 items-center flex justify-center w-fit"
    >
      <figure className={`${figClass}`}>
        <Image
          alt="une image de type de pokemon"
          classImg="object-cover w-full h-full"
          name={name}
          src={typeImg}
          id={id}
          index={index}
        />
      </figure>
    </a>
  );
};

export default CardType;
