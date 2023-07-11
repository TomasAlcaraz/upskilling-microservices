import { Schema } from "mongoose";
import { ICharacter } from "../models/Character";

const GenderEnum = ["male", "female", "n/a", "hermaphrodite"];

const characterSchema: Schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  height: { type: String, required: true },
  mass: { type: String, required: true },
  hair_color: { type: String, required: true },
  skin_color: { type: String, required: true },
  eye_color: { type: String, required: true },
  birth_year: { type: String, required: true },
  gender: { type: String, enum: GenderEnum, required: true },
  homeworld: { type: String, ref: "Planet", required: true },
  films: { type: [String], ref: "Film", required: true },
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  const resolution = id ? this.findOne(id) : this.find();
  return await resolution
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character: ICharacter) {
  return await this.create(character);
};

export default characterSchema;
