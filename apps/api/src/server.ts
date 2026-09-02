import { createServer } from "node:http";

import { prisma } from "@hobblitt/database";

import { app } from "./app.js";
import { env } from "./config/env.js";

const server = createServer(app);

server.listen(env.port, () => {
  console.log(`Hobblitt API running on http://localhost:${env.port}`);
});

async function shutdown(signal: string) {
  console.log(`${signal} received. Shutting down...`);

  server.close(async (serverError) => {
    if (serverError) {
      console.error("Failed to close HTTP server:", serverError);
      process.exitCode = 1;
      return;
    }

    try {
      await prisma.$disconnect();
      console.log("Database connection closed.");
    } catch (error) {
      console.error("Failed to disconnect Prisma:", error);
      process.exitCode = 1;
    }
  });
}

process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});
