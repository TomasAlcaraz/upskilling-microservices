import axios from "axios";

export default {
  list: async () => {
    const response = await axios.get("http://database:8004/Planet");
    return response.data;
  },
  create: async () => {
    throw Error;
  },
};
