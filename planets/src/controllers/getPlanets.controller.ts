import { Planet } from "../models/Planet";
import db from "../data";
import { Request, Response } from "express";
import response from "../utils/response";

export default async (
  req: Request,
  res: Response
): Promise<Response<Planet[], Record<string, any>>> => {
  const data = await db.list();
  return response(res, 200, data);
};
