import rateLimit from "express-rate-limit";

export const summonRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions. Please try again later.",
  },
});
