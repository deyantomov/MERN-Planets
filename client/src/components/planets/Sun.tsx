import { ThreeElements } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function Sun(props: ThreeElements["mesh"]): React.ReactNode {
  const colorMap = useTexture(["sun.jpg"])[0];
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh {...props}>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          color={"yellow"}
          emissive={"orange"}
          emissiveIntensity={1}
        />
        <pointLight
          position={[0, 0, 0]}
          intensity={1000}
          power={2000}
          distance={1000000}
        />
      </mesh>
    </>
  );
}
