/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Image from "./Image";
import handlePrev from "../assets/lib/handlePrev";
import handleNext from "../assets/lib/handleNext";

const Slider = ({ imgsSlider, setImgsSlider }) => {
  console.log("imgsSlider in Slider:", imgsSlider);
  console.log("Array.isArray in Slider:", Array.isArray(imgsSlider));
  const [index, setIndex] = useState(0);
  let newIndex;
  const imgSliderLength = imgsSlider?.length - 1;
  console.log("imgSliderLength in Slider:", imgSliderLength);
  const [imgSrc, setImgSrc] = useState("");
  console.log("imgSrc in Slider:", imgSrc);
  useEffect(() => {
    try {
      if (index > imgSliderLength) {
        newIndex = 0;
        setIndex(newIndex);
      } else if (index < 0) {
        newIndex = imgSliderLength;
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
    } catch (error) {
      console.log("error in useEffect on Slider:", error);
    }
  }, [imgsSlider, index]);

  return (
    <div className="boxSlider">
      <div className="text-center">
        {index + 1 === 1 || index + 1 === 2 ? (
          <p>Look legacy</p>
        ) : (
          <p>Look Shiny</p>
        )}
        {index} / {imgSliderLength}
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
