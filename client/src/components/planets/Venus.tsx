import { ThreeElements } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function Venus(props: ThreeElements["mesh"]): React.ReactNode {
  const colorMap = useTexture(["venus.jpg"])[0];
  const heightMap = useTexture(["venusbump.jpg"])[0];

  return (
    <mesh {...props}>
      <sphereGeometry args={[0.45, 32, 32]} />
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