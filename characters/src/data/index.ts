import axios from "axios";
import characters from "./characters.json";

export default {
  list: async () => {
    const characters = await axios.get("http://database:8004/Character");
    console.log(characters);
    return "Ok";
  },
  create: async () => {
    throw Error;
  },
};
