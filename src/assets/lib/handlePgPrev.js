const handlePgPrev = (e, offset, setOffset) => {
  try {
    if (offset > 0) {
      const newOffset = offset - 20;
      console.log("newOffset:", newOffset);
      setOffset(newOffset);
    }
  } catch (error) {
    console.error("error in handlePgPrev:", error);
  }
};
export default handlePgPrev;
