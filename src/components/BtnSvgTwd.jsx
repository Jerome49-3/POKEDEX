const BtnSvgTwd = ({
  btnClass,
  svgClass,
  svgWidth,
  svgColor,
  svgHeight,
  svgPath,
  handleClick,
}) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 24 24"
        fill="none"
        stroke={svgColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={svgClass}
      >
        <path d={svgPath} />
      </svg>
    </button>
  );
};

export default BtnSvgTwd;
