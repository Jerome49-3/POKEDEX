import { StateContext } from "./StateContext";
import { useState } from "react";

export const StateProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [imgsArray, setImgsArray] = useState([]);

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
        imgsArray,
        setImgsArray,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
