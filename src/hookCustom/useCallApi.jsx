/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import fetchDataGeneric from "../assets/lib/fetchData/fetchDataGeneric";
import axios from "axios";
import { useStateContext } from "../assets/lib/useStateContext";

const useCallApi = (methodAxios, urlApi) => {
  // console.log("methodAxios on useCallApi:", methodAxios);
  const {
    count,
    setCount,
    next,
    setNext,
    prev,
    setPrev,
    imgsSlider,
    setImgsSlider,
  } = useStateContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  useEffect(() => {
    fetchDataGeneric(
      axios({
        method: methodAxios,
        url: urlApi,
      }),
      setData,
      setLoading,
      setCount,
      setNext,
      setPrev,
      setImgsSlider
    );
  }, [loading]);
  return { data, loading, count, next, prev, imgsSlider };
};

export default useCallApi;
