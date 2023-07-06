import { Film } from "../models/Film";
import films from "../data/films.json";
import { Request, Response } from "express";

export default (req: Request, res: Response): Response<Film[]> => {
  return res.status(200).json(films);
};
