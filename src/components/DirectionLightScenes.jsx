/* eslint-disable react/no-unknown-property */
import React, { Fragment } from "react";

const DirectionLightScenes = ({ positionArr, intensityVal, colorHex }) => {
  return (
    <Fragment>
      <directionalLight
        position={positionArr}
        intensity={intensityVal}
        color={colorHex}
      />
    </Fragment>
  );
};

export default DirectionLightScenes;
