import cors from "cors";
import express from "express";


import { notFound } from "./middleware/not-found.js";
import { apiRouter } from "./routes/index.js";
import { errorHandler } from "./middleware/error_handler.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.use(notFound);
app.use(errorHandler);
