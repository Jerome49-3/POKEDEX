import { useState, useEffect } from "react";
import { useStateContext } from "../assets/lib/useStateContext";
import fetchDataGeneric from "../assets/lib/fetchData/fetchDataGeneric";
import axios from "axios";

const useCallApi = (methodAxios, urlApi, typeString) => {
  console.log("methodAxios on useCallApi:", methodAxios);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useStateContext();
  useEffect(() => {
    fetchDataGeneric(
      axios({
        method: methodAxios,
        url: urlApi,
      }),
      dispatch,
      typeString,
      setLoading
    );
  }, []);
  return { state, loading };
};

export default useCallApi;
