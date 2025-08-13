const handlePrev = (e, newIndex, index, setIndex) => {
  e.preventDefault();
  try {
    console.log("newIndex in Slider:", newIndex);
    newIndex = index - 1;
    setIndex(newIndex);
    console.log("newIndex in Slider:", newIndex);
  } catch (error) {
    console.log("error in handlePrev:", error);
  }
};
export default handlePrev;
