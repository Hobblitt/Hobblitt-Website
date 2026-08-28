import cors from "cors";
import express from "express";

import { healthRoutes } from "./routes/health.routes.js";
import { summonRoutes } from "./routes/summon.routes.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: "1mb" }));

  app.use("/api/health", healthRoutes);
  app.use("/api/summon", summonRoutes);

  return app;
}