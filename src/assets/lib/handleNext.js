const handleNext = (e, newIndex, index, setIndex) => {
  e.preventDefault();
  try {
    newIndex = index + 1;
    setIndex(newIndex);
    console.log("newIndex in Slider:", newIndex);
  } catch (error) {
    console.log("error in handleNext:", error);
  }
};
export default handleNext;
