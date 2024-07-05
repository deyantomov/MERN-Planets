import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Venus(props: ThreeElements["mesh"]): React.ReactNode {
  const venusRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const colorMap = useTexture(["venus.jpg"])[0];
  const heightMap = useTexture(["venusbump.jpg"])[0];

  const orbitR = 4; // radius
  const orbitV = 0.13;  // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (venusRef.current) {
      //  orbit rotation
      venusRef.current.position.x = Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      venusRef.current.position.z = Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);

      //  axis rotation
      venusRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh castShadow ref={venusRef} {...props}>
      <sphereGeometry args={[0.84, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={heightMap}
        displacementScale={0.001}
        color={"white"}
        emissive={"brown"}
        emissiveIntensity={0.03}
      />
    </mesh>
  );
}