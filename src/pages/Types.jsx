import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useStateContext } from "../assets/lib/useStateContext";

//components
import { CardType } from "../components";

const Type = () => {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useStateContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_URL}/pokedex/types`
        );
        // console.log("response in Type:", response);
        dispatch({ type: "getPokemonTypes", data: response?.data });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return loading ? (
    <p>...loading</p>
  ) : (
    <>
      <main className="boxTypes p-10 h-full">
        <div className="wrapper w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="w-full h-full flex gap-10 flex-wrap justify-between">
            {state?.results.map((type, index) => {
              // console.log("type in Type", type);
              // console.log("index in Type", index);
              return (
                <Fragment key={index}>
                  <CardType type={type} index={index} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Type;
