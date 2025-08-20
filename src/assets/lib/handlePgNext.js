const handlePgNext = (e, offset, setOffset, count) => {
  try {
    let newOffset = offset + 20;
    if (newOffset === count) {
      newOffset = 0;
    }
    console.log("newOffset:", newOffset);
    setOffset(newOffset);
  } catch (error) {
    console.error("error in handlePgNext:", error);
  }
};
export default handlePgNext;
