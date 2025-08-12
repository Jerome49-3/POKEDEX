/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

import skyAnime from "/models/skyAnime.glb";

const Sky = () => {
  const sky = useGLTF(skyAnime);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
