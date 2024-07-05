import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Earth(props: ThreeElements["mesh"]): React.ReactNode {
  const earthRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const colorMap = useTexture(["earth.jpg"])[0];
  // const heightMap = useTexture(["mercurybump.jpg"])[0];

  const mercuryBlue = new THREE.Color(0x325188);
  const orbitR = 5; // radius
  const orbitV = 0.1;  // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (earthRef.current) {
      //  orbit rotation
      earthRef.current.position.x = Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      earthRef.current.position.z = Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);

      //  axis rotation
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh castShadow ref={earthRef} {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        // displacementMap={heightMap}
        // displacementScale={0.0015}
        color={"white"}
        emissive={mercuryBlue}
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}
