import { ThreeElements } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Mercury(props: ThreeElements["mesh"]): React.ReactNode {
  const colorMap = useTexture(["mercury.jpg"])[0];
  const heightMap = useTexture(["mercurybump.jpg"])[0];

  const mercuryBlue = new THREE.Color(0x325188);

  return (
    <mesh {...props}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={heightMap}
        displacementScale={0.0015}
        color={"white"}
        emissive={mercuryBlue}
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}
