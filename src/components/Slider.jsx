/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Image from "./Image";
import handlePrev from "../assets/lib/handleImgPrev";
import handleNext from "../assets/lib/handleImgNext";

const Slider = ({ imgsSlider, setImgsSlider, imgsLength }) => {
  console.log("%cimgsSlider in Slider:", "color: green", imgsSlider);
  console.log(
    "%cArray.isArray in Slider:",
    "color: green",
    Array.isArray(imgsSlider)
  );
  const [index, setIndex] = useState(() => {
    const getIndex = Number(localStorage.getItem("indexSlider"));
    console.log("%cgetIndex:", "color: green", getIndex);
    console.log("%ctypeof getIndex:", "color: green", typeof getIndex);
    if (getIndex) {
      console.log("%cgetIndex2:", "color: green", getIndex);
      return getIndex;
    } else {
      return 0;
    }
  });
  let newIndex = index + 0;
  console.log("%cnewIndex in Slider:", "color: green", newIndex);
  // const imgSliderLength = imgsLength;
  // console.log("imgSliderLength in Slider:", imgSliderLength);
  const [imgSrc, setImgSrc] = useState("");
  console.log("%cimgSrc in Slider:", "color: green", imgSrc);
  useEffect(() => {
    try {
      if (index > imgsLength) {
        newIndex = 0;
        setIndex(newIndex);
      } else if (index < 0) {
        newIndex = imgsLength;
        setIndex(newIndex);
      }
      console.log("index in useEffect on Slider:", index);
      console.log(
        "imgsSlider[index] in useEffect on Slider:",
        imgsSlider[index]
      );
      if (imgsSlider[index]) {
        setImgSrc(imgsSlider[index]);
      }
      localStorage.setItem("indexSlider", newIndex);
    } catch (error) {
      console.log("error in useEffect on Slider:", error);
    }
  }, [imgsSlider, index]);
  return (
    <div className="boxSlider">
      <div className="text-center">
        {index === 1 || index === 2 ? <p>Look legacy</p> : <p>Look Shiny</p>}
        {index} / {imgsLength}
      </div>
      {imgSrc && <Image src={imgSrc} alt="image pokemon" />}
      <div className="navSlider flex justify-between">
        <button
          className="bg-fuchsia-800 rounded-[15%] w-10 h-5 flex items-center justify-center px-6 py-3"
          onClick={(e) => handlePrev(e, newIndex, index, setIndex)}
        >
          prev
        </button>
        <button
          className="bg-fuchsia-800 rounded-[15%] w-10 h-5 flex items-center justify-center px-6 py-3"
          onClick={(e) => handleNext(e, newIndex, index, setIndex)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
