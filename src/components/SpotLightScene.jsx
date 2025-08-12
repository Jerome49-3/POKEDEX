/* eslint-disable react/no-unknown-property */
import React from "react";

const SpotLightScene = ({ positionVal, intensityVal, angleVal, colorHex }) => {
  return (
    <>
      <spotLight
        position={positionVal}
        intensity={intensityVal}
        angle={angleVal}
        color={colorHex}
      />
    </>
  );
};

export default SpotLightScene;
