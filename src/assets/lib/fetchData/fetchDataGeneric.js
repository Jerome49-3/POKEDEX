const fetchDataGeneric = async (axios, setData, setLoading) => {
  try {
    const response = await axios;
    console.log("%cresponse in fetchDataGeneric:", "color: magenta", response);
    if (response?.data) {
      setData(response?.data);
    }
    setLoading(false);
  } catch (error) {
    console.log("error?.response.data:", error?.response.data);
    console.log("error?.response.status:", error?.response.status);
    console.log("error?.response.headers:", error?.response.headers);
  }
};
export default fetchDataGeneric;
