import axios from "axios";
import { Dispatch } from "redux";
import { set } from "../app/features/coordinates/coordinateSlice";

export const fetchAllPlanetData = async () => {
  const result = await axios.get("http://localhost:3000");
  return result.data;
};

export const fetchPlanetCoordinates = async (dispatch: Dispatch) => {
  const result = await axios.get("http://localhost:3000/coordinates");
  const data = result.data;

  dispatch(set(data));
};