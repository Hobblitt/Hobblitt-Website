import { Router } from "express";

import { handleCreateSummonLead } from "../controllers/summon.controller.js";

export const summonRouter = Router();

summonRouter.post("/", handleCreateSummonLead);
