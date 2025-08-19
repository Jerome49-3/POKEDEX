/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import fetchDataGeneric from "../assets/lib/fetchData/fetchDataGeneric";
import axios from "axios";
import { useStateContext } from "../assets/lib/useStateContext";

const useCallApi = (methodAxios, urlApi, deps) => {
  // console.log("methodAxios on useCallApi:", methodAxios);
  const { isLoading, setIsLoading } = useStateContext();
  const [data, setData] = useState(true);
  useEffect(() => {
    fetchDataGeneric(
      axios({
        method: methodAxios,
        url: urlApi,
      }),
      setData,
      setIsLoading
    );
  }, [isLoading, ...deps]);
  return { data, isLoading };
};

export default useCallApi;
