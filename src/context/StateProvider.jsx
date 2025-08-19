import { StateContext } from "./StateContext";
import { useState } from "react";

export const StateProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [imgsSlider, setImgsSlider] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("state in StateProvider:", state);
  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        count,
        setCount,
        next,
        setNext,
        prev,
        setPrev,
        imgsSlider,
        setImgsSlider,
        isLoading,
        setIsLoading,
        offset,
        setOffset,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
