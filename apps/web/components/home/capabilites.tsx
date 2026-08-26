"use client";

import type { CapabilityKey } from "./hero";

const capabilities: {
  key: CapabilityKey;
  number: string;
  title: string;
  description: string;
  services: string[];
}[] = [
  {
    key: "BUILD",
    number: "01",
    title: "BUILD",
    description: "Turn ideas into things.",
    services: [
      "Websites",
      "Web Applications",
      "Mobile Applications",
      "Digital Products",
      "UI / UX",
      "Digital Experiences",
    ],
  },
  {
    key: "AUTOMATE",
    number: "02",
    title: "AUTOMATE",
    description: "Turn repetitive work into intelligent systems.",
    services: [
      "AI",
      "AI Integrations",
      "Business Automation",
      "CRM",
      "Workflow Systems",
      "Internal Tools",
    ],
  },
  {
    key: "GROW",
    number: "03",
    title: "GROW",
    description: "Turn digital presence into momentum.",
    services: [
      "Branding",
      "Brand Identity",
      "Content",
      "Social",
      "SEO",
      "Digital Campaigns",
    ],
  },
];

type CapabilitiesProps = {
  activeCapability: CapabilityKey;
  onSelectCapability: (capability: CapabilityKey) => void;
};

export function Capabilities({
  activeCapability,
  onSelectCapability,
}: CapabilitiesProps) {
  return (
    <section
      id="capabilities"
      className="border-t border-[#111827]/15 bg-[#F8FAFC] px-margin py-20 text-[#111827] md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-8 lg:mb-20 lg:grid-cols-[0.7fr_minmax(0,1.3fr)]">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              03 / CAPABILITIES
            </span>
          </div>

          <div className="min-w-0">
            <h2 className="type-h1 max-w-5xl text-[clamp(2.25rem,7vw,5rem)]">
              Three ways to move your business forward.
            </h2>
            <p className="type-body mt-6 max-w-2xl text-base leading-7 text-[#64748B] md:mt-8">
              One team, different capabilities. Strategy sits above it all,
              helping us figure out what combination of expertise the problem
              actually needs.
            </p>
          </div>
        </div>

        {/* Strategy rail — thin labelled band above the three capability bands,
            per spec pg. 13 (not repeated as a fourth interactive card). */}
        <div className="mb-px flex items-start gap-3 border border-b-0 border-[#111827]/15 bg-[#111827] px-5 py-3 md:items-center md:px-6">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED] md:mt-0" />
          <span className="type-caption text-[8px] text-[#94A3B8]">
            STRATEGY — THE LAYER ABOVE BUILD / AUTOMATE / GROW
          </span>
        </div>

        <div className="grid border border-[#111827]/15 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const isActive = activeCapability === capability.key;

            return (
              <button
                key={capability.key}
                onClick={() => onSelectCapability(capability.key)}
                className={`group border-b border-[#111827]/15 p-6 text-left transition-all duration-500 last:border-b-0 sm:p-8 md:p-10 lg:min-h-[430px] lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                  isActive
                    ? "bg-[#111827] text-white"
                    : "bg-[#F8FAFC] hover:bg-[#EEF2F5]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`type-caption text-[10px] ${
                      isActive ? "text-[#22B8F0]" : "text-[#94A3B8]"
                    }`}
                  >
                    {capability.number}
                  </span>
                  <span
                    className={`text-xl transition-transform duration-500 ${
                      isActive
                        ? "translate-x-1 text-[#22B8F0]"
                        : "text-[#94A3B8] group-hover:translate-x-1"
                    }`}
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-10 lg:mt-24">
                  <h3 className="type-h2 text-3xl sm:text-4xl">
                    {capability.title}
                  </h3>
                  <p
                    className={`type-body mt-4 max-w-xs text-sm leading-6 ${
                      isActive ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {capability.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 lg:mt-10">
                  {capability.services.map((service) => (
                    <span
                      key={service}
                      className={`type-caption border px-3 py-2 text-[8px] tracking-[0.08em] ${
                        isActive
                          ? "border-white/10 text-[#94A3B8]"
                          : "border-[#111827]/10 text-[#64748B]"
                      }`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
