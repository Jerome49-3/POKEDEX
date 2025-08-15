/* eslint-disable react/no-unknown-property */
import { Fragment, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Pokedex from "../models/Pokedex";
import Sky from "../models/Sky";
import { Loader, DirectionLightScenes, SpotLightScene } from "../components";

const BoxModels = ({ skyScale, skyPosition, skyRotation }) => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <Fragment>
      <div className="w-full h-full items-center justify-center flex-col cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [5, 8, 15], fov: 85 }}
          className="w-full h-full bg-transparent"
        >
          <OrbitControls
            enablePan={false}
            enableZoom={!isTabletOrMobile}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} color="#ffffff" />
            <DirectionLightScenes
              positionArr={[15, 80, 2.5]}
              intensityVal={0.25}
              colorHex={"#efaefc"}
            />
            <SpotLightScene
              positionVal={[-10, 5, 10]}
              intensityVal={100}
              angleVal={0.15}
              colorHex={"#f9e79f"}
            />
            <SpotLightScene
              positionVal={[10, -2.5, -20]}
              intensityVal={100}
              angleVal={1}
              colorHex={"#a9fc9d"}
            />
            <Pokedex />
            <Sky
              skyScale={skyScale}
              skyPosition={skyPosition}
              skyRotation={skyRotation}
            />
          </Suspense>
        </Canvas>
      </div>
    </Fragment>
  );
};

export default BoxModels;
