import axios from "axios";
import characters from "./characters.json";

export default {
  list: async () => {
    const response = await axios.get("http://database:8004/Character");
    return response.data;
  },
  create: async () => {
    throw Error;
  },
};
