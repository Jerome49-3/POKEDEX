const handlePgNext = (e, offset, setOffset) => {
  try {
    const newOffset = offset + 20;
    console.log("newOffset:", newOffset);
    setOffset(newOffset);
  } catch (error) {
    console.error("error in handlePgNext:", error);
  }
};
export default handlePgNext;
