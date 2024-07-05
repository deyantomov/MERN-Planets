import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Mars(props: ThreeElements["mesh"]): React.ReactNode {
  const marsRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const [colorMap] = useTexture(["mars.jpg"]);

  const orbitR = 6; // radius
  const orbitV = 0.08;  // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (marsRef.current) {
      //  orbit rotation
      marsRef.current.position.x = Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      marsRef.current.position.z = Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);

      //  axis rotation
      marsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh castShadow ref={marsRef} {...props}>
      <sphereGeometry args={[0.9, 32, 32]} />
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