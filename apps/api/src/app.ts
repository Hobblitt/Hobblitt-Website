import cors from "cors";
import express from "express";

import { errorHandler } from "./middleware/error_handler.js";
import { notFound } from "./middleware/not-found.js";
import { apiRouter } from "./routes/index.js";

export const app = express();

const allowedOrigin = process.env.WEB_URL ?? "http://localhost:3000";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use("/api", apiRouter);

app.use(notFound);
app.use(errorHandler);
