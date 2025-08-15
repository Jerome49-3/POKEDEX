const fetchDataGeneric = async (
  axios,
  setData,
  setLoading,
  setCount,
  setNext,
  setPrev,
  setImgsArray
) => {
  try {
    const response = await axios;
    console.log("response in fetchDataGeneric:", response);
    if (response?.data) {
      setData(response?.data?.results);
    }
    if (response?.data?.count) {
      setCount(response?.data?.count);
    }
    if (response?.data?.next) {
      setNext(response?.data?.next);
    }
    if (response?.data?.prev) {
      setPrev(response?.data?.prev);
    }
    if (response?.data?.images) {
      setImgsArray(response?.data?.images);
    }
    setLoading(false);
  } catch (error) {
    console.log("error?.response.data:", error?.response.data);
    console.log("error?.response.status:", error?.response.status);
    console.log("error?.response.headers:", error?.response.headers);
  }
};
export default fetchDataGeneric;
