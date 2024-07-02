import { Vector3 } from "three";
import Mercury from "../components/planets/Mercury";
import Venus from "../components/planets/Venus";
import Earth from "../components/planets/Earth";
import { TPlanet } from "../types/Planet";

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

      return <Component key={key} position={position} onClick={() => console.log(key)}/>;
    });
  }
}
