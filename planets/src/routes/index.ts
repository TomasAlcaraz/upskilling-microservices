import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getPlanets);

export default router;

