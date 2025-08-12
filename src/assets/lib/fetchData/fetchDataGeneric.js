const fetchDataGeneric = async (axios, dispatch, typeString, setLoading) => {
  try {
    const response = await axios;
    console.log("response in fetchDataGeneric:", response);
    dispatch({ type: typeString, data: response?.data });
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
};
export default fetchDataGeneric;
