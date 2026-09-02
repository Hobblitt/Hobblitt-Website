import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.PORT ?? 4000);
const webUrl = process.env.WEB_URL ?? "http://localhost:3000";

if (!Number.isInteger(port) || port <= 0 || port > 65535) {
  throw new Error("PORT must be a valid TCP port.");
}

if (!webUrl.startsWith("http://") && !webUrl.startsWith("https://")) {
  throw new Error("WEB_URL must be a valid HTTP or HTTPS URL.");
}

export const env = {
  port,
  webUrl,
} as const;
