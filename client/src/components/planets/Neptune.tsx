import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Neptune(props: ThreeElements["mesh"]): React.ReactNode {
  const neptuneRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const [colorMap] = useTexture(["neptune.jpg"]);

  const orbitR = 16; // radius
  const orbitV = 0.03;  // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (neptuneRef.current) {
      //  orbit rotation
      neptuneRef.current.position.x = Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      neptuneRef.current.position.z = Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);

      //  axis rotation
      neptuneRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh castShadow ref={neptuneRef} {...props}>
      <sphereGeometry args={[1.17, 32, 32]} />
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