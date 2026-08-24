import Link from "next/link";

import {
  approachCta,
  approachHero,
  approachPrinciple,
  approachSteps,
} from "@/lib/approach";

const accentClasses = {
  blue: {
    number: "text-[#22B8F0]",
    indicator: "bg-[#22B8F0]",
  },
  violet: {
    number: "text-[#7C3AED]",
    indicator: "bg-[#7C3AED]",
  },
} as const;

export default function ApproachPage() {
  return (
    <main className="bg-[#0B1120] text-[#F8FAFC]">
      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="relative overflow-hidden border-b border-[#1E293B] bg-[#0B1120]">
        {/* Editorial grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(30,41,59,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.35) 1px, transparent 1px)",
              backgroundSize: "106px 106px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pb-36 md:pt-40 lg:px-16 lg:pb-40 lg:pt-44">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* Section label */}

            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#22B8F0]">
                {approachHero.eyebrow}
              </p>

              <p className="mt-4 hidden max-w-[180px] font-mono text-[8px] font-bold leading-5 tracking-[0.16em] text-[#475569] md:block">
                {approachHero.kicker}
              </p>
            </div>

            {/* Main hero content */}

            <div className="max-w-[980px]">
              <p className="mb-7 font-mono text-[8px] font-bold tracking-[0.2em] text-[#64748B] md:hidden">
                {approachHero.kicker}
              </p>

              <h1 className="text-[clamp(3.4rem,7.2vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                Listen
                <span className="text-[#22B8F0]"> → </span>
                Understand
                <span className="text-[#22B8F0]"> → </span>
                Assemble
                <span className="text-[#22B8F0]"> → </span>
                Build
                <span className="text-[#7C3AED]"> → </span>
                <span className="text-[#22B8F0]">Move.</span>
              </h1>

              <p className="mt-10 max-w-[760px] text-[16px] leading-7 text-[#94A3B8] md:mt-12 md:text-[18px] md:leading-8">
                {approachHero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
          ========================================================= */}

      <section className="bg-[#E2E8F0] text-[#0B1120]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* Label */}

            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#22B8F0]">
                02 / THE PROCESS
              </p>
            </div>

            {/* Process */}

            <div>
              <div className="max-w-[850px]">
                <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                  Five steps.
                  <br />
                  <span className="text-[#22B8F0]">One direction.</span>
                </h2>
              </div>

              <div className="mt-16 border-t border-[#CBD5E1]">
                {approachSteps.map((step) => {
                  const accent = accentClasses[step.accent];

                  return (
                    <article
                      key={step.number}
                      className="group border-b border-[#CBD5E1]"
                    >
                      <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 py-8 md:grid-cols-[70px_220px_minmax(0,1fr)] md:items-start md:gap-8 md:py-10 lg:grid-cols-[70px_260px_minmax(0,1fr)]"
                      >
                        {/* Number */}

                        <div className="flex items-start pt-1">
                          <span
                            className={`font-mono text-[8px] font-bold tracking-[0.18em] ${accent.number}`}
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Title */}

                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={`mt-2 h-1.5 w-1.5 shrink-0 ${accent.indicator}`}
                          />

                          <h3 className="font-mono text-[13px] font-bold tracking-[-0.02em] md:text-[15px]">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}

                        <p className="col-start-2 max-w-[620px] text-[15px] leading-7 text-[#64748B] md:col-start-auto md:text-[16px] md:leading-7">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLE
          ========================================================= */}

      <section className="bg-[#0B1120] text-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* Label */}

            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#22B8F0]">
                03 / {approachPrinciple.eyebrow}
              </p>
            </div>

            {/* Content */}

            <div className="max-w-[950px]">
              <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                {approachPrinciple.title}
                <br />
                <span className="text-[#22B8F0]">
                  {approachPrinciple.highlight}
                </span>
              </h2>

              <div className="mt-12 border-t border-[#1E293B] pt-10">
                <p className="max-w-[780px] text-[16px] leading-8 text-[#94A3B8] md:text-[18px]">
                  {approachPrinciple.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
          ========================================================= */}

      <section className="bg-[#22B8F0] text-[#0B1120]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-36">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* Label */}

            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.2em]">
                {approachCta.eyebrow}
              </p>
            </div>

            {/* CTA */}

            <div>
              <h2 className="max-w-[900px] text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
                {approachCta.title}
              </h2>

              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  href={approachCta.primaryHref}
                  className="inline-flex items-center gap-6 bg-[#0B1120] px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
                >
                  <span>{approachCta.primaryLabel}</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href={approachCta.secondaryHref}
                  className="inline-flex items-center gap-6 border border-[#0B1120]/30 px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] text-[#0B1120] transition-colors duration-300 hover:bg-[#0B1120] hover:text-[#22B8F0]"
                >
                  <span>{approachCta.secondaryLabel}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}