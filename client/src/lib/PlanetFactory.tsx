import { Vector3 } from "three";
import Mercury from "../components/planets/Mercury";
import Venus from "../components/planets/Venus";
import Earth from "../components/planets/Earth";
import Mars from "../components/planets/Mars";
import Jupiter from "../components/planets/Jupiter";
import Saturn from "../components/planets/Saturn";
import Uranus from "../components/planets/Uranus";
import Neptune from "../components/planets/Neptune";
import { TPlanet } from "../types/Planet";

export default class PlanetFactory {
  private _planetComponents: Map<string, TPlanet> = new Map<string, TPlanet>();

  constructor() {
    this._planetComponents.set("Mercury", Mercury);
    this._planetComponents.set("Venus", Venus);
    this._planetComponents.set("Earth", Earth);
    this._planetComponents.set("Mars", Mars);
    this._planetComponents.set("Jupiter", Jupiter);
    this._planetComponents.set("Saturn", Saturn);
    this._planetComponents.set("Uranus", Uranus);
    this._planetComponents.set("Neptune", Neptune);
  }

  public render() {
    return Array.from(this._planetComponents.entries()).map(([key, Component]) => {
      let position: Vector3;
      
      switch (key) {
        case "Mercury":
          position = new Vector3(1, 0, 0);
          break;
        case "Venus":
          position = new Vector3(2, 0, 0);
          break;
        case "Earth":
          position = new Vector3(4, 0, 0);
          break;
        case "Mars":
          position = new Vector3(6, 0, 0);
          break;
        case "Jupiter":
          position = new Vector3(7, 0, 0);
          break;
        case "Saturn":
          position = new Vector3(8, 0, 0);
          break;
        case "Uranus":
          position = new Vector3(10, 0, 0);
          break;
        case "Neptune":
          position = new Vector3(12, 0, 0);
          break;
        default:
          position = new Vector3();
      }
      
      return <Component key={key} name={key} position={position} />;
    });
  }
}
