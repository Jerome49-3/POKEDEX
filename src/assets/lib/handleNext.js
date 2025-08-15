const handleNext = (e, newIndex, index, setIndex) => {
  console.log("newIndex in handleNext:", newIndex);
  console.log("index in handleNext:", index);
  e.preventDefault();
  try {
    newIndex = index + 1;
    setIndex(newIndex);
    console.log("newIndex in handleNext:", newIndex);
  } catch (error) {
    console.log("error in handleNext:", error);
  }
};
export default handleNext;
