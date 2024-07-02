import { Vector3 } from "three";
import Mercury from "../components/planets/Mercury";
import Venus from "../components/planets/Venus";
import Earth from "../components/planets/Earth";
import PlanetWithTitle from "../components/planets/PlanetWithTitle";
import { TPlanet } from "../types/Planet";
import { ThreeEvent } from "@react-three/fiber";

export default class PlanetFactory {
  private _planetComponents: Map<string, TPlanet> = new Map<string, TPlanet>();

  constructor() {
    this._planetComponents.set("Mercury", Mercury);
    this._planetComponents.set("Venus", Venus);
    this._planetComponents.set("Earth", Earth);
  }

  public render() {
    return Array.from(this._planetComponents.entries()).map(([key, Component]) => {
      let position: Vector3;
      
      switch (key) {
        case "Mercury":
          position = new Vector3(6, 8, 5);
          break;
        case "Venus":
          position = new Vector3(7, 9, 5);
          break;
        case "Earth":
          position = new Vector3(8, 10, 5);
          break;
        default:
          position = new Vector3();
      }
  
      const planetProps = {
        onClick: (e: ThreeEvent<MouseEvent>) => {
          console.log(e);
          console.log(key);
        }
      }
      
      return <PlanetWithTitle key={key} name={key} Planet={Component} position={position} props={planetProps} />;
    });
  }
}
