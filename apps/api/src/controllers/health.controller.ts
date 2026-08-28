import type { Request, Response } from "express";

import { prisma } from "@hobblitt/database";

export async function getHealth(_req: Request, res: Response): Promise<void> {
  await prisma.$queryRaw`SELECT 1`;

  res.json({
    status: "ok",
    database: "connected",
  });
}
