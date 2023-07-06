import { Planet } from "../models/Planet";
import { Request, Response } from "express";
import db from "../data";

export default (req: Request, res: Response): Response<Planet[]> => {
  return res.status(200).json(db.list());
};
