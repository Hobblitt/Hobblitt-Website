import { prisma } from "@hobblitt/database";

export async function healthCheck() {
  await prisma.$queryRaw`SELECT 1`;

  return {
    status: "ok",
    database: "connected",
  };
}
