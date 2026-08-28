import type { Request, Response } from "express";

import { prisma } from "@hobblitt/database";

type SummonRequestBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  problem?: unknown;
  buildType?: unknown;
  timeline?: unknown;
  budget?: unknown;
  context?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BUILD_TYPES = new Set([
  "product",
  "website",
  "engineering",
  "ai-automation",
  "growth",
  "not-sure",
]);

const TIMELINES = new Set([
  "asap",
  "1-3-months",
  "3-6-months",
  "6-plus-months",
  "exploring",
]);

const BUDGET_RANGES = new Set([
  "under-1l",
  "1l-3l",
  "3l-10l",
  "10l-plus",
  "not-sure",
]);

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function createSummonLead(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const body = (req.body ?? {}) as SummonRequestBody;

    const name = stringValue(body.name);
    const email = stringValue(body.email).toLowerCase();
    const company = stringValue(body.company);
    const problem = stringValue(body.problem);
    const buildType = stringValue(body.buildType);
    const timeline = stringValue(body.timeline);
    const budget = stringValue(body.budget);
    const context = stringValue(body.context);

    const errors: Record<string, string> = {};

    if (!name) {
      errors.name = "Tell us who we're talking to.";
    }

    if (!email) {
      errors.email = "We need a way to reach you.";
    } else if (!EMAIL_PATTERN.test(email)) {
      errors.email = "That doesn't look like a valid email.";
    }

    if (!problem) {
      errors.problem = "Tell us what's stuck.";
    } else if (problem.length < 10) {
      errors.problem = "Please give us a little more detail.";
    }

    if (buildType && !BUILD_TYPES.has(buildType)) {
      errors.buildType = "Invalid build type.";
    }

    if (timeline && !TIMELINES.has(timeline)) {
      errors.timeline = "Invalid timeline.";
    }

    if (budget && !BUDGET_RANGES.has(budget)) {
      errors.budget = "Invalid budget range.";
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        errors,
      });

      return;
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company: company || null,
        problem,
        buildType: buildType || null,
        timeline: timeline || null,
        budget: budget || null,
        context: context || null,
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Lead received successfully.",
      lead,
    });
  } catch (error) {
    console.error("Summon submission failed:", error);

    res.status(500).json({
      success: false,
      message:
        "Something went wrong on our end. Please try again or email us directly.",
    });
  }
}
