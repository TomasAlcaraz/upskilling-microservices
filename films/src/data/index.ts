import data from "../data";
import axios from "axios";

export default {
  list: async () => {
    const response = await axios.get("http://database:8004/Film");
    return response.data;
  },
  create: async () => {
    throw Error;
  },
};
