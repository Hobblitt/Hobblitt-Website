"use client";

type CapabilityKey = "BUILD" | "AUTOMATE" | "GROW";

type HeroProps = {
  activeCapability: CapabilityKey;
  onSelectCapability: (capability: CapabilityKey) => void;
};

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

export function Hero({ activeCapability, onSelectCapability }: HeroProps) {
  const scrollToCapabilities = () => {
    document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] items-center overflow-hidden bg-[#111827] text-[#F8FAFC]">
      {/* Background grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22B8F0]/[0.035] blur-[120px]" />

      {/* Editorial vertical lines */}
      <div className="pointer-events-none absolute left-[7%] top-0 hidden h-full w-px bg-[#E2E8F0]/[0.05] xl:block" />
      <div className="pointer-events-none absolute right-[7%] top-0 hidden h-full w-px bg-[#E2E8F0]/[0.05] xl:block" />

      {/* pb clears the absolutely positioned info bar at the section's foot. */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-margin pb-28 pt-20 md:pb-32 md:pt-28 xl:min-h-[calc(100dvh-72px)] xl:flex-row xl:items-center xl:gap-16">
        {/* ============================== HERO COPY */}
        <div className="min-w-0 flex-1">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-8 shrink-0 bg-[#22B8F0] sm:w-10" />
            <span className="type-caption text-[9px] text-[#22B8F0]">
              DIGITAL PARTNERS · NOT VENDORS
            </span>
          </div>

          {/* Display headline — League Spartan Black, hero only.
              Floor is 2.75rem, not 4rem: "Hit a wall?" set in Black at 64px
              measures wider than a 375px viewport's text column. */}
          {/* From xl the signal dial takes ~520px of the row, so the headline
              scales off the narrower copy column rather than the full page. */}
          <h1 className="type-display max-w-[900px] text-[clamp(2.75rem,11vw,9rem)] uppercase xl:text-[clamp(3.5rem,5.5vw,7rem)]">
            <span className="block">Hit a wall?</span>
            <span className="mt-2 block text-[#22B8F0] sm:mt-3">Summon</span>
            <span className="block">Hobblitt.</span>
          </h1>

          <p className="type-body mt-8 max-w-[600px] text-base leading-7 text-[#94A3B8] md:mt-10 md:text-lg md:leading-8">
            One integrated team helping ambitious businesses{" "}
            <span className="text-[#F8FAFC]">build</span>,{" "}
            <span className="text-[#F8FAFC]">automate</span>, and{" "}
            <span className="text-[#F8FAFC]">grow</span>.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@hobblitt.com"
              className="group inline-flex h-14 items-center justify-center gap-4 bg-[#22B8F0] px-7 type-nav text-[10px] text-[#111827] transition-all duration-300 hover:bg-[#F8FAFC]"
            >
              SUMMON HOBBLITT
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>

            <button
              onClick={scrollToCapabilities}
              className="group inline-flex h-14 items-center justify-center gap-4 border border-[#E2E8F0]/15 px-7 type-nav text-[10px] text-[#F8FAFC] transition-all duration-300 hover:border-[#E2E8F0]/40 hover:bg-[#E2E8F0]/[0.04]"
            >
              SEE WHAT WE BUILD
              <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
            </button>
          </div>
        </div>

        {/* ============================== SIGNAL SYSTEM
            Fixed 520px square. At lg it left only ~310px for the headline
            column, so it now joins the row at xl where there is room for both. */}
        <div className="relative hidden h-[520px] w-[520px] shrink-0 items-center justify-center xl:flex">
          <div className="absolute h-[430px] w-[430px] rounded-full border border-[#22B8F0]/10" />
          <div className="absolute h-[315px] w-[315px] rounded-full border border-[#22B8F0]/15" />
          <div className="absolute h-[195px] w-[195px] rounded-full border border-[#22B8F0]/20" />

          <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#22B8F0]/20 to-transparent" />
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#22B8F0]/20 to-transparent" />

          {/* Center pulse — the single abstract "signal", not literal iconography */}
          <div className="relative z-10 flex h-28 w-28 items-center justify-center">
            <div className="signal-ring signal-ring-one absolute inset-0 rotate-45 border border-[#22B8F0]/60" />
            <div className="signal-ring signal-ring-two absolute inset-3 rotate-45 border border-[#22B8F0]/20" />
            <div className="signal-core h-3 w-3 rounded-full bg-[#22B8F0] shadow-[0_0_35px_10px_rgba(34,184,240,0.28)]" />
          </div>

          <button
            onClick={() => onSelectCapability("BUILD")}
            className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-3"
          >
            <SignalNode active={activeCapability === "BUILD"} />
            <span
              className={`type-nav text-[10px] transition-colors ${
                activeCapability === "BUILD" ? "text-white" : "text-[#64748B]"
              }`}
            >
              BUILD
            </span>
          </button>

          <button
            onClick={() => onSelectCapability("AUTOMATE")}
            className="absolute right-0 top-[23%] flex items-center gap-3"
          >
            <span
              className={`type-nav text-[10px] transition-colors ${
                activeCapability === "AUTOMATE" ? "text-white" : "text-[#64748B]"
              }`}
            >
              AUTOMATE
            </span>
            <SignalNode active={activeCapability === "AUTOMATE"} />
          </button>

          <button
            onClick={() => onSelectCapability("GROW")}
            className="absolute bottom-[18%] right-[2%] flex items-center gap-3"
          >
            <span
              className={`type-nav text-[10px] transition-colors ${
                activeCapability === "GROW" ? "text-white" : "text-[#64748B]"
              }`}
            >
              GROW
            </span>
            <SignalNode active={activeCapability === "GROW"} />
          </button>

          <div className="absolute left-[15%] top-1/2 h-px w-[30%] bg-gradient-to-r from-transparent to-[#22B8F0]/40" />
          <div className="absolute right-[15%] top-[39%] h-px w-[27%] rotate-[24deg] bg-gradient-to-r from-[#22B8F0]/40 to-transparent" />
          <div className="absolute bottom-[35%] right-[17%] h-px w-[25%] -rotate-[28deg] bg-gradient-to-r from-[#22B8F0]/40 to-transparent" />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="type-caption text-[8px] text-[#64748B]">
              ONE TEAM · MANY CAPABILITIES
            </span>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 border-t border-[#E2E8F0]/[0.08] px-margin py-5">
          <span className="type-caption text-[8px] text-[#64748B]">
            TECHNOLOGY · CREATIVITY · STRATEGY
          </span>
          <span className="type-caption hidden shrink-0 text-[8px] text-[#64748B] md:block">
            SCROLL TO EXPLORE ↓
          </span>
          <span className="type-caption shrink-0 text-[8px] text-[#64748B]">
            01 / 10
          </span>
        </div>
      </div>
    </section>
  );
}

export type { CapabilityKey };