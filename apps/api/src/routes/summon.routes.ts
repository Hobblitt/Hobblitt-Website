import { Router } from "express";

import { handleCreateSummonLead } from "../controllers/summon.controller.js";

const router = Router();

router.post("/", handleCreateSummonLead);

export { router as summonRoutes };
