/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useLayoutEffect } from "react";
import Image from "./Image";
import handlePrev from "../assets/lib/handlePrev";
import handleNext from "../assets/lib/handleNext";

const Slider = ({ imgsPokeArray }) => {
  console.log("imgsPokeArray in Slider:", imgsPokeArray);
  const [index, setIndex] = useState(() => {
    const oldIndex = localStorage.getItem("indesSlider");
    console.log("oldIndex in Slider:", oldIndex);
    if (oldIndex) {
      return Number(oldIndex);
    } else {
      const indexSlid = 0;
      return indexSlid;
    }
  });
  const [imgSlider, setImgSlider] = useState([]);
  console.log("imgSlider in Slider:", imgSlider);
  let newIndex;
  const imgSliderLength = imgSlider?.length - 1;
  console.log("imgSimgSliderLengthlider in Slider:", imgSliderLength);
  useLayoutEffect(() => {
    try {
      setImgSlider(imgsPokeArray);
      if (index > imgSliderLength) {
        newIndex = 0;
        setIndex(newIndex);
        localStorage.setItem("indexSlider", index);
      } else if (index < 0) {
        newIndex = imgSliderLength;
        setIndex(newIndex);
        localStorage.setItem("indexSlider", index);
      }
      if (index === imgSlider[index]) {
        setImgSlider(imgSlider[index]);
      }
    } catch (error) {
      console.log("error in useEffect on Slider:", error);
    }
  }, [imgsPokeArray, index, imgSliderLength]);

  return (
    <div className="boxSlider">
      <p className="text-center">
        {index + 1 === 1 || index + 1 === 2 ? (
          <p>Look legacy</p>
        ) : (
          <p>Look Shiny</p>
        )}
        {index + 1} / {imgSliderLength + 1}
      </p>
      {imgSlider && <Image src={imgSlider[index]} />}
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
