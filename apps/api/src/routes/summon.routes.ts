import { Router } from "express";

import { createSummonLead } from "../controllers/summon.controller.js";

const router = Router();

router.post("/", createSummonLead);

export { router as summonRoutes };
