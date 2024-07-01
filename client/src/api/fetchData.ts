import axios from "axios";

export const fetchAllPlanetData = async () => {
  const result = await axios.get("http://localhost:3000");
  return result.data;
};