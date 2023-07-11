import { Schema } from "mongoose";
import { IPlanet } from "../models/Planet";

export const planetSchema: Schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  rotation_period: { type: String, required: true },
  orbital_period: { type: String, required: true },
  diameter: { type: String, required: true },
  climate: { type: String, required: true },
  gravity: { type: String, required: true },
  terrain: { type: String, required: true },
  surface_water: { type: String, required: true },
  residents: { type: [String], ref: "Character", required: true },
  films: { type: [String], ref: "Film", required: true },
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  const resolution = id ? this.findOne(id) : this.find();
  return await resolution
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet: IPlanet) {
  return await this.create(planet);
};
