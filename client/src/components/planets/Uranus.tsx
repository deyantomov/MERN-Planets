import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Uranus(props: ThreeElements["mesh"]): React.ReactNode {
  const uranusRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const [colorMap] = useTexture(["uranus.jpg"]);
  const [ringMap] = useTexture(["uranus-ring.jpg"])

  const orbitR = 14; // radius
  const orbitV = 0.035; // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (uranusRef.current) {
      //  orbit rotation
      uranusRef.current.position.x =
        Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      uranusRef.current.position.z =
        Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);

      //  axis rotation
      uranusRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh castShadow ref={uranusRef} {...props}>
      <sphereGeometry args={[1.3, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        // displacementMap={heightMap}
        // displacementScale={0.0015}
        color={"white"}
        emissive="orange"
        emissiveIntensity={0.05}
      />
      <mesh rotation={[Math.PI / 2, 0, Math.PI * 0.1]}>
        <torusGeometry args={[1.8, 0.2, 2, 100]} />
        <meshStandardMaterial map={ringMap} />
      </mesh>
    </mesh>
  );
}