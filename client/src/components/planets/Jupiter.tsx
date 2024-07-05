import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Jupiter(props: ThreeElements["mesh"]): React.ReactNode {
  const jupiterRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const [colorMap] = useTexture(["jupiter.jpg"]);

  const orbitR = 9; // radius
  const orbitV = 0.05;  // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (jupiterRef.current) {
      //  orbit rotation
      jupiterRef.current.position.x = Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      jupiterRef.current.position.z = Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);

      //  axis rotation
      jupiterRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh castShadow ref={jupiterRef} {...props}>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        // displacementMap={heightMap}
        // displacementScale={0.0015}
        color={"white"}
        emissive="orange"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}