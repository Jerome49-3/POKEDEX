import { useReducer } from "react";
import { StateContext } from "./StateContext";
import PokReducer from "../store/PokReducer";

export const StateProvider = ({ children }) => {
  //******* STATE PANIER ************//
  const [state, dispatch] = useReducer(PokReducer, [], () => {
    const newPokedex = localStorage.getItem("pokedex");
    // console.log("%cnewPokedex in App:", "color: green", newPokedex);
    if (newPokedex === null) {
      return [];
    } else {
      return JSON.parse(newPokedex);
    }
  });

  // console.log("state in StateProvider:", state);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
