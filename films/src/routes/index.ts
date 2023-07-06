import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getFilms);

export default router;
