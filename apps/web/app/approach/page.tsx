import Link from "next/link";

import { PageSection } from "@/components/shared/page-section";
import { SpecList } from "@/components/shared/spec-list";
import { SpecRow } from "@/components/shared/spec-row";
import {
  approachCta,
  approachHero,
  approachPrinciple,
  approachSteps,
} from "@/lib/approach";

const accentColor = {
  blue: "text-[#22B8F0]",
  violet: "text-[#7C3AED]",
} as const;

export default function ApproachPage() {
  return (
    <main className="bg-[#111827] text-[#F8FAFC]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0]/10 bg-[#111827]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "106px 106px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pb-36 md:pt-40 lg:px-16 lg:pb-40 lg:pt-44">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
            <div>
              <p className="type-caption text-[9px] text-[#22B8F0]">
                {approachHero.eyebrow}
              </p>
              <p className="type-caption mt-4 hidden max-w-[180px] text-[8px] leading-5 text-[#475569] md:block">
                {approachHero.kicker}
              </p>
            </div>

            <div className="max-w-[980px]">
              <p className="type-caption mb-7 text-[8px] text-[#64748B] md:hidden">
                {approachHero.kicker}
              </p>

              <h1 className="type-h1 text-[clamp(3.4rem,7.2vw,7.8rem)] tracking-[-0.065em]">
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

              <p className="type-body mt-10 max-w-[760px] text-[16px] leading-7 text-[#94A3B8] md:mt-12 md:text-[18px] md:leading-8">
                {approachHero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <PageSection sectionLabel="02 / THE PROCESS" tone="light">
        <h2 className="type-h1 text-[clamp(3rem,6vw,6.5rem)]">
          Five steps.
          <br />
          <span className="text-[#22B8F0]">One direction.</span>
        </h2>

        <SpecList tone="light">
          {approachSteps.map((step) => (
            <SpecRow
              key={step.number}
              tone="light"
              columns="md:grid-cols-[70px_220px_minmax(0,1fr)] lg:grid-cols-[70px_260px_minmax(0,1fr)]"
              number={step.number}
              title={
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${accentColor[step.accent]}`}
                  />
                  <span className="type-h2 text-[15px] normal-case tracking-[-0.02em]">
                    {step.title}
                  </span>
                </span>
              }
              description={step.description}
            />
          ))}
        </SpecList>
      </PageSection>

      {/* PRINCIPLE */}
      <PageSection
        sectionLabel={`03 / ${approachPrinciple.eyebrow}`}
        tone="dark"
      >
        <h2 className="type-h1 max-w-[950px] text-[clamp(3.5rem,7vw,7.5rem)]">
          {approachPrinciple.title}
          <br />
          <span className="text-[#22B8F0]">{approachPrinciple.highlight}</span>
        </h2>

        <div className="mt-12 border-t border-[#E2E8F0]/10 pt-10">
          <p className="type-body max-w-[780px] text-[16px] leading-8 text-[#94A3B8] md:text-[18px]">
            {approachPrinciple.description}
          </p>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection sectionLabel={approachCta.eyebrow} tone="accent">
        <h2 className="type-display max-w-[900px] text-[clamp(3.5rem,7vw,7.5rem)]">
          {approachCta.title}
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href={approachCta.primaryHref}
            className="type-nav inline-flex items-center gap-6 bg-[#111827] px-7 py-5 text-[9px] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
          >
            <span>{approachCta.primaryLabel}</span>
            <span aria-hidden="true">↗</span>
          </Link>

          <Link
            href={approachCta.secondaryHref}
            className="type-nav inline-flex items-center gap-6 border border-[#111827]/30 px-7 py-5 text-[9px] transition-colors duration-300 hover:bg-[#111827] hover:text-[#22B8F0]"
          >
            <span>{approachCta.secondaryLabel}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
