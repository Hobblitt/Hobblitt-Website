import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { healthCheck } from "./routes/health.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    const result = await healthCheck();

    res.json(result);
  } catch (error) {
    console.error("Health check failed:", error);

    res.status(503).json({
      success: false,
      status: "error",
      database: "disconnected",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Hobblitt API running on http://localhost:${PORT}`);
});
