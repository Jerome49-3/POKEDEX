/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Pokedex = (props) => {
  const { nodes, materials } = useGLTF("/models/pokedex.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pokedex_low_PlasticRed_0.geometry}
          material={materials.PlasticRed}
          position={[-1.611, 12.889, 58.003]}
          scale={100}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/pokedex.glb");

export default Pokedex;
