"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { FormField } from "@/components/summon/form-field";
import { OptionGroup } from "@/components/summon/option-group";
import { submitSummonLead } from "@/api/summon";

import {
  initialSummonFormValues,
  validateSummonForm,
  type BudgetRange,
  type BuildType,
  type SummonFormFieldErrors,
  type SummonFormValues,
  type Timeline,
} from "@/lib/summon-form";

const buildTypeOptions: { value: BuildType; label: string }[] = [
  { value: "product", label: "Product" },
  { value: "website", label: "Website" },
  { value: "engineering", label: "Engineering" },
  { value: "ai-automation", label: "AI / Automation" },
  { value: "growth", label: "Growth" },
  { value: "not-sure", label: "Not sure yet" },
];

const timelineOptions: { value: Timeline; label: string }[] = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "exploring", label: "Just exploring" },
];

const budgetOptions: { value: BudgetRange; label: string }[] = [
  { value: "under-1l", label: "Under ₹1L" },
  { value: "1l-3l", label: "₹1L–₹3L" },
  { value: "3l-10l", label: "₹3L–₹10L" },
  { value: "10l-plus", label: "₹10L+" },
  { value: "not-sure", label: "Not sure yet" },
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<SummonFormValues>(
    initialSummonFormValues,
  );
  const [errors, setErrors] = useState<SummonFormFieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const updateField = <K extends keyof SummonFormValues>(
    key: K,
    value: SummonFormValues[K],
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fieldErrors = validateSummonForm(values);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage(null);

    const result = await submitSummonLead(values);

    if (result.ok) {
      setSubmitState("success");
      setValues(initialSummonFormValues);
    } else {
      setSubmitState("error");
      setSubmitMessage(result.message);
    }
  };

  if (submitState === "success") {
    return (
      <div className="border border-[#22B8F0]/30 bg-[#22B8F0]/[0.06] p-8 md:p-10">
        <p className="type-caption text-[9px] text-[#22B8F0]">MESSAGE SENT</p>
        <h3 className="type-h2 mt-4 text-2xl text-[#F8FAFC]">
          Got it — we&apos;ll be in touch.
        </h3>
        <p className="type-body mt-3 max-w-md text-sm leading-6 text-[#94A3B8]">
          We read every message ourselves. Expect a reply from a real person,
          usually within a couple of business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="type-nav mt-6 inline-flex items-center gap-3 border border-[#E2E8F0]/20 px-5 py-3 text-[9px] text-[#F8FAFC] transition-colors duration-300 hover:border-[#22B8F0] hover:text-[#22B8F0]"
        >
          SEND ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8 md:space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <FormField
          label="NAME"
          name="name"
          value={values.name}
          onChange={(v) => updateField("name", v)}
          error={errors.name}
          required
          placeholder="Your name"
        />

        <FormField
          label="WORK EMAIL"
          name="email"
          type="email"
          value={values.email}
          onChange={(v) => updateField("email", v)}
          error={errors.email}
          required
          placeholder="you@company.com"
        />
      </div>

      <FormField
        label="COMPANY"
        name="company"
        value={values.company}
        onChange={(v) => updateField("company", v)}
        placeholder="Company or project name"
      />

      <FormField
        as="textarea"
        label="WHAT ARE YOU TRYING TO SOLVE?"
        name="problem"
        value={values.problem}
        onChange={(v) => updateField("problem", v)}
        error={errors.problem}
        required
        rows={4}
        description="This is the field that matters most — the more specific, the better we can help."
        placeholder="What's stuck? What's not working? What are you trying to figure out?"
      />

      <OptionGroup
        label="WHAT ARE YOU LOOKING TO BUILD?"
        name="buildType"
        options={buildTypeOptions}
        value={values.buildType}
        onChange={(v) => updateField("buildType", v)}
      />

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <OptionGroup
          label="TIMELINE"
          name="timeline"
          options={timelineOptions}
          value={values.timeline}
          onChange={(v) => updateField("timeline", v)}
        />

        <OptionGroup
          label="BUDGET RANGE"
          name="budget"
          options={budgetOptions}
          value={values.budget}
          onChange={(v) => updateField("budget", v)}
        />
      </div>

      <FormField
        as="textarea"
        label="ADDITIONAL CONTEXT"
        name="context"
        value={values.context}
        onChange={(v) => updateField("context", v)}
        rows={3}
        placeholder="Anything else worth knowing — links, constraints, who else is involved."
      />

      {submitState === "error" && submitMessage && (
        <p
          role="alert"
          className="type-body border border-[#F87171]/30 bg-[#F87171]/[0.06] px-5 py-4 text-sm text-[#F87171]"
        >
          {submitMessage}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-5 sm:gap-6">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="type-nav inline-flex min-h-[48px] w-full items-center justify-center gap-4 bg-[#22B8F0] px-7 py-4 text-[9px] text-[#111827] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:w-auto sm:justify-start"
        >
          {submitState === "submitting" ? "SENDING…" : "SEND THIS TO HOBBLITT"}
          {submitState !== "submitting" && <span aria-hidden="true">↗</span>}
        </button>

        <p className="type-body text-xs text-[#64748B]">
          Fields marked <span className="text-[#22B8F0]">*</span> are required.
        </p>
      </div>
    </form>
  );
}
