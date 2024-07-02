import { Vector3 } from "three";
import { Text } from "@react-three/drei";
import { TPlanet } from "../../types/Planet";
import { MeshProps } from "@react-three/fiber";

interface IPlanetWithTitleProps {
  name: string;
  Planet: TPlanet;
  position: Vector3;
  props: MeshProps;
}

export default function PlanetWithTitle({
  name,
  Planet,
  position,
  props,
}: IPlanetWithTitleProps) {
  return (
    <group position={position}>
      <Planet {...props} />
      <Text
        position={[0, 0.8, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
      >
        {name}
      </Text>
    </group>
  );
}
