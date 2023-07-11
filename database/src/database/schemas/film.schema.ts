import { Schema } from "mongoose";
import { IFilm } from "../models/Film";

export const filmSchema: Schema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  opening_crawl: { type: String, required: true },
  director: { type: String, required: true },
  producer: { type: String, required: true },
  release_date: { type: Date, required: true },
  characters: { type: [String], ref: "Character", required: true },
  planets: { type: [String], ref: "Planet", required: true },
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  const resolution = id ? this.findOne(id) : this.find();
  return await resolution
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

filmSchema.statics.insert = async function (film: IFilm) {
  return await this.create(film);
};
