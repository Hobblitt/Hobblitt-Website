export type BuildType =
  | "product"
  | "website"
  | "engineering"
  | "ai-automation"
  | "growth"
  | "not-sure";

export type Timeline =
  | "asap"
  | "1-3-months"
  | "3-6-months"
  | "6-plus-months"
  | "exploring";

export type BudgetRange =
  | "under-1l"
  | "1l-3l"
  | "3l-10l"
  | "10l-plus"
  | "not-sure";

export type SummonFormValues = {
  name: string;
  email: string;
  company: string;
  problem: string;
  buildType: BuildType | null;
  timeline: Timeline | null;
  budget: BudgetRange | null;
  context: string;
};

export const initialSummonFormValues: SummonFormValues = {
  name: "",
  email: "",
  company: "",
  problem: "",
  buildType: null,
  timeline: null,
  budget: null,
  context: "",
};

export type SummonFormFieldErrors = Partial<
  Record<"name" | "email" | "problem", string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSummonForm(
  values: SummonFormValues,
): SummonFormFieldErrors {
  const errors: SummonFormFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Tell us who we're talking to.";
  }

  if (!values.email.trim()) {
    errors.email = "We need a way to reach you.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That doesn't look like a valid email.";
  }

  if (!values.problem.trim()) {
    errors.problem = "This is the most important field — tell us what's stuck.";
  } else if (values.problem.trim().length < 10) {
    errors.problem = "A little more detail helps us respond usefully.";
  }

  return errors;
}

export type SummonSubmitResult = { ok: true } | { ok: false; message: string };

/**
 * Submit handler abstraction.
 *
 * POSTs to /api/summon, which does not exist yet — wire it up to whatever
 * ends up handling leads (a Next.js route handler, Resend, a CRM webhook,
 * etc). Until that endpoint exists, submissions correctly surface the
 * "error" state. Do not stub this to always resolve ok — that would fake
 * a successful submission with nothing behind it.
 */
export async function submitSummonLead(
  values: SummonFormValues,
): Promise<SummonSubmitResult> {
  try {
    const response = await fetch("/api/summon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return {
        ok: false,
        message:
          "Something went wrong on our end. Please try again or email us directly.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }
}
