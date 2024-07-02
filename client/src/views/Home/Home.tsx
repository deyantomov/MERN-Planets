import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import Sun from "../../components/planets/Sun";
import PlanetFactory from "../../lib/PlanetFactory";

export default function Home(): React.ReactNode {
  const [isPressed, setIsPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const planetFactory = new PlanetFactory();

  const handleClick = () => {
    navigate("/data");
  };

  const handleMiddleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 1) {
      setIsPressed(!isPressed);
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div onMouseDown={handleMiddleButtonClick} className="w-full h-full">
      <Canvas
      style={{
        background: "rgba(0,0,0,1) 100%",
      }}
      camera={{ position: [10, 10, 10], fov: 90 }}
    >
      <Stars saturation={1} />
      <ambientLight intensity={0.15} />
      <OrbitControls />
      <Sun position={[0, 0, 0]} />
      {planetFactory.render().map((planet) => {
        return planet;
      })}
      {isPressed && (
        <Html as="div" fullscreen>
          <div
            className="w-full h-full flex justify-start align-start items-start p-16"
            style={{ pointerEvents: "none" }}
          >
            <button
              className="text-2xl text-black bg-gray-100/80 px-4 py-2 rounded-md"
              onClick={handleClick}
              style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
                pointerEvents: "all",
              }}
            >
              View data as a table
            </button>
          </div>
        </Html>
      )}
    </Canvas>
    </div>
  );
}
