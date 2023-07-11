import mongoose from "mongoose";
import characterSchema from "./schemas/character.schema";
import { filmSchema } from "./schemas/film.schema";
import { planetSchema } from "./schemas/planets.schema";

const connection = mongoose.createConnection(
  "mongodb+srv://admin:alcaraz@cluster0.ydxcjok.mongodb.net/starwars"
);

const schemas: any = {
  Character: connection.model("Character", characterSchema),
  Film: connection.model("Film", filmSchema),
  Planet: connection.model("Planet", planetSchema),
};

export default schemas;
