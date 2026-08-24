"use client";

import { useMemo, useState } from "react";

type CapabilityKey = "BUILD" | "AUTOMATE" | "GROW";

type Problem = {
  id: string;
  label: string;
  combo: CapabilityKey[];
  outcome: string;
};

const problems: Problem[] = [
  {
    id: "launch",
    label: "We need to launch something new.",
    combo: ["BUILD"],
    outcome:
      "A working product, not just a prototype — shipped with the right foundation to keep building on.",
  },
  {
    id: "manual-ops",
    label: "Our team is buried in repetitive work.",
    combo: ["BUILD", "AUTOMATE"],
    outcome: "Systems and internal tools that take the repeatable work off your team's plate.",
  },
  {
    id: "stalled-growth",
    label: "Growth has stalled and we don't know why.",
    combo: ["AUTOMATE", "GROW"],
    outcome: "Clarity on what's actually working, then a system built to create momentum.",
  },
  {
    id: "outdated-presence",
    label: "Our brand and site don't match who we are now.",
    combo: ["BUILD", "GROW"],
    outcome: "A digital presence that finally matches the business you've become.",
  },
  {
    id: "unclear",
    label: "Honestly, we don't know what we need yet.",
    combo: ["BUILD", "AUTOMATE", "GROW"],
    outcome: "That's the normal starting point. We listen first, then assemble the right combination.",
  },
];

const capabilityMeta: Record<CapabilityKey, { hint: string }> = {
  BUILD: { hint: "Products, engineering, UX" },
  AUTOMATE: { hint: "AI, workflows, internal tools" },
  GROW: { hint: "Brand, content, momentum" },
};

export function ProblemAssembly() {
  const [activeId, setActiveId] = useState(problems[0].id);

  const active = useMemo(
    () => problems.find((problem) => problem.id === activeId) ?? problems[0],
    [activeId],
  );

  const mailHref = `mailto:hello@hobblitt.com?subject=${encodeURIComponent(
    `Summon Hobblitt — ${active.label}`,
  )}`;

  return (
    <section className="border-t border-[#E2E8F0]/10 bg-[#111827] px-margin py-28 md:py-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
          {/* Label */}
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              05 / ASSEMBLE THE FIX
            </span>
          </div>

          {/* Content */}
          <div>
            <p className="type-caption text-[9px] text-[#64748B]">
              PICK WHAT&apos;S ACTUALLY GOING ON.
            </p>

            <h2 className="type-h1 mt-5 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              One problem.
              <br />
              <span className="text-[#22B8F0]">Many capabilities.</span>
            </h2>

            <p className="type-body mt-6 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg">
              You don&apos;t need to know which service you need. Tell us what&apos;s
              actually stuck — we&apos;ll show you which capabilities Hobblitt would
              bring together for it.
            </p>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
              {/* Problem picker */}
              <div className="border border-[#E2E8F0]/10" role="tablist" aria-label="Common problems">
                {problems.map((problem) => {
                  const isActive = problem.id === activeId;
                  return (
                    <button
                      key={problem.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(problem.id)}
                      className={`flex w-full items-center justify-between gap-4 border-b border-[#E2E8F0]/10 px-6 py-5 text-left transition-colors duration-300 last:border-b-0 ${
                        isActive ? "bg-[#1A2438]" : "hover:bg-[#1A2438]/50"
                      }`}
                    >
                      <span
                        className={`type-body text-sm leading-6 md:text-base ${
                          isActive ? "text-[#F8FAFC]" : "text-[#94A3B8]"
                        }`}
                      >
                        {problem.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`shrink-0 text-lg transition-transform duration-300 ${
                          isActive ? "translate-x-0.5 text-[#22B8F0]" : "text-[#475569]"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Assembly result */}
              <div className="border border-[#E2E8F0]/10 bg-[#0B1120] p-8">
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(capabilityMeta) as CapabilityKey[]).map((key) => {
                    const isOn = active.combo.includes(key);
                    return (
                      <div
                        key={key}
                        className={`min-w-[110px] flex-1 border px-4 py-4 transition-all duration-500 ${
                          isOn ? "border-[#22B8F0] bg-[#22B8F0]/10" : "border-[#E2E8F0]/10 opacity-40"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                              isOn ? "bg-[#22B8F0] shadow-[0_0_10px_rgba(34,184,240,0.7)]" : "bg-[#475569]"
                            }`}
                          />
                          <span className="type-nav text-[9px] text-[#F8FAFC]">{key}</span>
                        </div>
                        <p className="type-body mt-2 text-[11px] leading-5 text-[#64748B]">
                          {capabilityMeta[key].hint}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-[#E2E8F0]/10 pt-6">
                  <p className="type-caption text-[8px] text-[#22B8F0]">WHAT YOU GET</p>
                  <p className="type-body mt-3 text-sm leading-7 text-[#94A3B8] md:text-base">
                    {active.outcome}
                  </p>
                </div>

                <a
                  href={mailHref}
                  className="type-nav mt-8 inline-flex items-center gap-3 border border-[#22B8F0]/50 px-5 py-3 text-[9px] text-[#22B8F0] transition-all duration-300 hover:border-[#22B8F0] hover:bg-[#22B8F0] hover:text-[#111827]"
                >
                  SUMMON HOBBLITT FOR THIS
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}