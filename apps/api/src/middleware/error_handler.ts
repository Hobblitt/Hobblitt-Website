import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error("Unhandled API error:", error);

  res.status(500).json({
    success: false,
    message:
      "Something went wrong on our end. Please try again or email us directly.",
  });
};
