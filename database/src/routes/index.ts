import { Router, Request, Response } from "express";
import schemas from "../database";
import { Schema } from "mongoose";

const router = Router();

router.get("/:model", async (req: Request, res: Response) => {
  enum possible {
    Character = "Character",
    Film = "Film",
    Planet = "Planet",
  }
  try {
    const { model } = req.params;
    const data = await schemas[model].list();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(404).json({ err: error.message, possible });
  }
});

export default router;
