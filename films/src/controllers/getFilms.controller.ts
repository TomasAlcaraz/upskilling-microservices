import { Film } from "../models/Film";
import { Request, Response } from "express";
import db from "../data";
import response from "../utils/response";

export default async (req: Request, res: Response): Promise<Response<Film[], Record<string, any>>> => {
  const data = await db.list();
  return response(res, 200, data);
};
