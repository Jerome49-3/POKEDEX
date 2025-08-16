const handlePrev = (e, newIndex, index, setIndex) => {
  console.log("newIndex in handlePrev:", newIndex);
  console.log("index in handlePrev:", index);
  e.preventDefault();
  try {
    console.log("newIndex in handlePrev:", newIndex);
    newIndex = index - 1;
    setIndex(newIndex);
    console.log("newIndex in handlePrev:", newIndex);
    localStorage.setItem("indexSlider", newIndex);
  } catch (error) {
    console.log("error in handlePrev:", error);
  }
};
export default handlePrev;
