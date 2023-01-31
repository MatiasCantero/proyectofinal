import { Router } from "express";
import { renderIndex, renderGuide } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/guide", renderGuide);

export default router;
