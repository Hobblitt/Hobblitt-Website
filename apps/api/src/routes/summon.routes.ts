import { Router } from "express";

import { handleCreateSummonLead } from "../controllers/summon.controller.js";
import { summonRateLimit } from "../middleware/rate-limit.js";

export const summonRouter = Router();

summonRouter.post("/", summonRateLimit, handleCreateSummonLead);
