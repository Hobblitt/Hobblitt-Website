import type { Request, Response } from "express";

import { createSummonLead } from "../services/summon.service.js";

type SummonRequestBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  problem?: unknown;
  buildType?: unknown;
  timeline?: unknown;
  budget?: unknown;
  context?: unknown;
  website?: unknown;
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

const LIMITS = {
  name: 100,
  email: 254,
  company: 200,
  problem: 5000,
  context: 5000,
} as const;

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function exceeds(value: string, limit: number): boolean {
  return value.length > limit;
}

export async function handleCreateSummonLead(
  req: Request,
  res: Response,
): Promise<void> {
  const body = (req.body ?? {}) as SummonRequestBody;

  const name = stringValue(body.name);
  const email = stringValue(body.email).toLowerCase();
  const company = stringValue(body.company);
  const problem = stringValue(body.problem);
  const buildType = stringValue(body.buildType);
  const timeline = stringValue(body.timeline);
  const budget = stringValue(body.budget);
  const context = stringValue(body.context);
  const website = stringValue(body.website);

  const errors: Record<string, string> = {};

  // Required fields
  if (!name) {
    errors.name = "Tell us who we're talking to.";
  } else if (exceeds(name, LIMITS.name)) {
    errors.name = `Name must be ${LIMITS.name} characters or fewer.`;
  }


  if (website) {
    res.status(400).json({
      success: false,
      message: "Invalid submission.",
    });
    return;
  }

  if (!email) {
    errors.email = "We need a way to reach you.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "That doesn't look like a valid email.";
  } else if (exceeds(email, LIMITS.email)) {
    errors.email = `Email must be ${LIMITS.email} characters or fewer.`;
  }

  if (!problem) {
    errors.problem = "Tell us what's stuck.";
  } else if (problem.length < 10) {
    errors.problem = "Please give us a little more detail.";
  } else if (exceeds(problem, LIMITS.problem)) {
    errors.problem = `Problem description must be ${LIMITS.problem} characters or fewer.`;
  }

  // Optional fields
  if (exceeds(company, LIMITS.company)) {
    errors.company = `Company must be ${LIMITS.company} characters or fewer.`;
  }

  if (exceeds(context, LIMITS.context)) {
    errors.context = `Additional context must be ${LIMITS.context} characters or fewer.`;
  }

  // Enum-like values
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

  const lead = await createSummonLead({
    name,
    email,
    company: company || null,
    problem,
    buildType: buildType || null,
    timeline: timeline || null,
    budget: budget || null,
    context: context || null,
  });

  res.status(201).json({
    success: true,
    message: "Lead received successfully.",
    lead,
  });
}
