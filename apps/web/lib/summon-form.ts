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
