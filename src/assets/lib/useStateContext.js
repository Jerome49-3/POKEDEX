import { useContext } from "react";
import { StateContext } from "../../context/StateContext";

export const useStateContext = () => {
  return useContext(StateContext);
};
