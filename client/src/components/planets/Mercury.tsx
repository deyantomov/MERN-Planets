import { useRef } from "react";
import { useFrame, MeshProps } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Mercury(props: MeshProps): React.ReactNode {
  const mercuryRef: React.MutableRefObject<THREE.Mesh | null> = useRef(null);
  const [colorMap] = useTexture(["mercury.jpg"]);
  const [heightMap] = useTexture(["mercurybump.jpg"]);

  const mercuryBlue = new THREE.Color(0x325188);
  const orbitR = 3; // radius
  const orbitV = 0.2;  // velocity

  const phaseOffsetX = 0;
  const phaseOffsetZ = 0;

  useFrame(({ clock }) => {
    if (mercuryRef.current) {
      //  orbit rotation
      mercuryRef.current.position.x = Math.cos(clock.getElapsedTime() * orbitV + phaseOffsetX) * (2 * orbitR);
      mercuryRef.current.position.z = Math.sin(clock.getElapsedTime() * orbitV + phaseOffsetZ) * (2 * orbitR);
    
      //  axis rotation
      mercuryRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh castShadow ref={mercuryRef} {...props}>
      <sphereGeometry args={[0.4, 32, 32]} />
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
