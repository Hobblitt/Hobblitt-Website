"use client";

import { useState } from "react";
import { Community } from "@/components/home/community";
import { HowWeWork } from "@/components/home/how-we-work";
import { SelectedWork } from "@/components/home/selected-work";
import { SummonHobblitt } from "@/components/home/summon-hobblitt";


const capabilities = [
  {
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

export default function FrontPage() {
  const [activeCapability, setActiveCapability] = useState("BUILD");

  const scrollToCapabilities = () => {
    document
      .getElementById("capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0B1120] text-[#F8FAFC]">
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(148,163,184,0.18) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(148,163,184,0.18) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22B8F0]/[0.035] blur-[120px]" />

        {/* Editorial vertical lines */}
        <div className="pointer-events-none absolute left-[7%] top-0 hidden h-full w-px bg-white/[0.05] lg:block" />
        <div className="pointer-events-none absolute right-[7%] top-0 hidden h-full w-px bg-white/[0.05] lg:block" />

        <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col px-margin py-20 md:py-28 lg:min-h-[calc(100vh-80px)] lg:flex-row lg:items-center lg:gap-16">
          {/* ========================================================
              HERO COPY
          ======================================================== */}

          <div className="flex-1">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#22B8F0]" />

              <span className="font-mono text-[9px] font-bold tracking-[0.28em] text-[#22B8F0]">
                DIGITAL PARTNERS · NOT VENDORS
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-[900px] font-sans font-bold uppercase leading-[0.86] tracking-[-0.055em]">
              <span className="block text-[clamp(4rem,9vw,9rem)]">
                Hit a wall?
              </span>

              <span className="mt-3 block text-[clamp(4rem,9vw,9rem)] text-[#22B8F0]">
                Summon
              </span>

              <span className="block text-[clamp(4rem,9vw,9rem)]">
                Hobblitt.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-10 max-w-[600px] text-base leading-7 text-[#94A3B8] md:text-lg md:leading-8">
              One integrated team helping ambitious businesses{" "}
              <span className="text-[#F8FAFC]">build</span>,{" "}
              <span className="text-[#F8FAFC]">automate</span>, and{" "}
              <span className="text-[#F8FAFC]">grow</span>.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@hobblitt.com"
                className="group inline-flex h-14 items-center justify-center gap-4 bg-[#22B8F0] px-7 font-mono text-[10px] font-bold tracking-[0.18em] text-[#07111D] transition-all duration-300 hover:bg-[#F8FAFC]"
              >
                SUMMON HOBBLITT
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <button
                onClick={scrollToCapabilities}
                className="group inline-flex h-14 items-center justify-center gap-4 border border-white/15 px-7 font-mono text-[10px] font-bold tracking-[0.18em] text-[#F8FAFC] transition-all duration-300 hover:border-white/40 hover:bg-white/[0.04]"
              >
                SEE WHAT WE BUILD
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </button>
            </div>
          </div>

          {/* ========================================================
              SIGNAL SYSTEM
          ======================================================== */}

          <div className="relative mt-20 hidden h-[520px] w-[520px] shrink-0 items-center justify-center lg:flex">
            {/* Rings */}
            <div className="absolute h-[430px] w-[430px] rounded-full border border-[#22B8F0]/10" />

            <div className="absolute h-[315px] w-[315px] rounded-full border border-[#22B8F0]/15" />

            <div className="absolute h-[195px] w-[195px] rounded-full border border-[#22B8F0]/20" />

            {/* Crosshair */}
            <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#22B8F0]/20 to-transparent" />

            <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#22B8F0]/20 to-transparent" />

            {/* Center */}
            <div className="relative z-10 flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 rotate-45 border border-[#22B8F0]/60" />

              <div className="absolute inset-3 rotate-45 border border-[#22B8F0]/20" />

              <div className="h-3 w-3 rounded-full bg-[#22B8F0] shadow-[0_0_35px_10px_rgba(34,184,240,0.28)]" />
            </div>

            {/* BUILD */}
            <button
              onClick={() => setActiveCapability("BUILD")}
              className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-3"
            >
              <SignalNode active={activeCapability === "BUILD"} />

              <span
                className={`font-mono text-[10px] font-bold tracking-[0.2em] transition-colors ${
                  activeCapability === "BUILD" ? "text-white" : "text-[#64748B]"
                }`}
              >
                BUILD
              </span>
            </button>

            {/* AUTOMATE */}
            <button
              onClick={() => setActiveCapability("AUTOMATE")}
              className="absolute right-0 top-[23%] flex items-center gap-3"
            >
              <span
                className={`font-mono text-[10px] font-bold tracking-[0.2em] transition-colors ${
                  activeCapability === "AUTOMATE"
                    ? "text-white"
                    : "text-[#64748B]"
                }`}
              >
                AUTOMATE
              </span>

              <SignalNode active={activeCapability === "AUTOMATE"} />
            </button>

            {/* GROW */}
            <button
              onClick={() => setActiveCapability("GROW")}
              className="absolute bottom-[18%] right-[2%] flex items-center gap-3"
            >
              <span
                className={`font-mono text-[10px] font-bold tracking-[0.2em] transition-colors ${
                  activeCapability === "GROW" ? "text-white" : "text-[#64748B]"
                }`}
              >
                GROW
              </span>

              <SignalNode active={activeCapability === "GROW"} />
            </button>

            {/* Connecting lines */}
            <div className="absolute left-[15%] top-1/2 h-px w-[30%] bg-gradient-to-r from-transparent to-[#22B8F0]/40" />

            <div className="absolute right-[15%] top-[39%] h-px w-[27%] rotate-[24deg] bg-gradient-to-r from-[#22B8F0]/40 to-transparent" />

            <div className="absolute bottom-[35%] right-[17%] h-px w-[25%] -rotate-[28deg] bg-gradient-to-r from-[#22B8F0]/40 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="font-mono text-[8px] tracking-[0.3em] text-[#64748B]">
                ONE TEAM · MANY CAPABILITIES
              </span>
            </div>
          </div>
        </div>

        {/* Bottom information bar */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between border-t border-white/[0.08] px-margin py-5">
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#64748B]">
              TECHNOLOGY · CREATIVITY · STRATEGY
            </span>

            <span className="hidden font-mono text-[8px] tracking-[0.2em] text-[#64748B] sm:block">
              SCROLL TO EXPLORE ↓
            </span>

            <span className="font-mono text-[8px] tracking-[0.2em] text-[#64748B]">
              01 / 10
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHO IS HOBBLITT
      ============================================================ */}

      <section
        id="about"
        className="border-t border-white/10 bg-[#111827] px-margin py-28 md:py-36"
      >
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Label */}
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.28em] text-[#22B8F0]">
                01 / WHO IS HOBBLITT
              </span>
            </div>

            {/* Content */}
            <div>
              <h2 className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                We&apos;re the team you call when there&apos;s something worth
                building.
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-8 text-[#94A3B8] md:text-lg">
                Hobblitt brings technology, creativity, strategy, and people
                together to help businesses move forward.
              </p>

              <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                <InfoBlock
                  number="01"
                  title="TECHNOLOGY"
                  text="Engineering, products, AI, and digital systems."
                />

                <InfoBlock
                  number="02"
                  title="CREATIVITY"
                  text="Brand, design, content, and experiences."
                />

                <InfoBlock
                  number="03"
                  title="STRATEGY"
                  text="Understanding what actually needs to happen."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY HOBBLITT
      ============================================================ */}

      <section className="bg-[#0B1120] px-margin py-28 md:py-36">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.28em] text-[#22B8F0]">
                02 / WHY HOBBLITT
              </span>
            </div>

            <div>
              <p className="font-mono text-sm tracking-[0.15em] text-[#94A3B8]">
                DON&apos;T BRING US A BRIEF.
              </p>

              <h2 className="mt-4 max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                Bring us the <span className="text-[#22B8F0]">problem.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-8 text-[#94A3B8] md:text-lg">
                You don&apos;t need to know exactly what you need before you
                call us. Tell us where you&apos;re stuck. We listen, understand
                the business, bring together the right capabilities, and build
                with you.
              </p>

              <div className="mt-14 flex items-center gap-4">
                <div className="h-px w-12 bg-[#22B8F0]" />

                <span className="font-mono text-[9px] tracking-[0.25em] text-[#64748B]">
                  PARTNERS · NOT VENDORS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CAPABILITIES
      ============================================================ */}

      <section
        id="capabilities"
        className="border-t border-white/10 bg-[#F8FAFC] px-margin py-28 text-[#0B1120] md:py-36"
      >
        <div className="mx-auto max-w-screen-2xl">
          {/* Heading */}
          <div className="mb-20 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.28em] text-[#22B8F0]">
                03 / CAPABILITIES
              </span>
            </div>

            <div>
              <h2 className="max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.05em] md:text-7xl">
                Three ways to move your business forward.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#64748B]">
                One team, different capabilities. Strategy sits above it all,
                helping us figure out what combination of expertise the problem
                actually needs.
              </p>
            </div>
          </div>

          {/* Capability system */}
          <div className="grid border border-[#0B1120]/15 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const isActive = activeCapability === capability.title;

              return (
                <button
                  key={capability.title}
                  onClick={() => setActiveCapability(capability.title)}
                  className={`group min-h-[430px] border-b border-[#0B1120]/15 p-8 text-left transition-all duration-500 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 md:p-10 ${
                    isActive
                      ? "bg-[#0B1120] text-white"
                      : "bg-[#F8FAFC] hover:bg-[#eef2f5]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-mono text-[10px] tracking-[0.2em] ${
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

                  <div className="mt-24">
                    <h3 className="text-4xl font-bold tracking-[-0.04em]">
                      {capability.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-xs text-sm leading-6 ${
                        isActive ? "text-[#94A3B8]" : "text-[#64748B]"
                      }`}
                    >
                      {capability.description}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {capability.services.map((service) => (
                      <span
                        key={service}
                        className={`border px-3 py-2 font-mono text-[8px] tracking-[0.08em] ${
                          isActive
                            ? "border-white/10 text-[#94A3B8]"
                            : "border-[#0B1120]/10 text-[#64748B]"
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

      <HowWeWork />

      <SelectedWork />

      <Community />

      <SummonHobblitt />

      <section className="border-t border-white/10 bg-[#0B1120] px-margin py-32">
        <div className="mx-auto max-w-screen-2xl text-center">
          <span className="font-mono text-[9px] tracking-[0.28em] text-[#22B8F0]">
            NEXT
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            One problem.
            <br />
            <span className="text-[#22B8F0]">Many capabilities.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#94A3B8]">
            This is where we&apos;ll build Hobblitt&apos;s signature
            problem-to-solution assembly interaction next.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   SIGNAL NODE
================================================================ */

function SignalNode({ active }: { active: boolean }) {
  return (
    <span
      className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
        active
          ? "border-[#22B8F0] bg-[#22B8F0] shadow-[0_0_16px_rgba(34,184,240,0.75)]"
          : "border-[#22B8F0]/40 bg-transparent"
      }`}
    />
  );
}

/* ================================================================
   INFO BLOCK
================================================================ */

function InfoBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#111827] p-7">
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#22B8F0]">
        {number}
      </span>

      <h3 className="mt-12 text-sm font-bold tracking-[0.12em] text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#64748B]">{text}</p>
    </div>
  );
}
