import Link from "next/link";

import { PageSection } from "@/components/shared/page-section";
import { SpecList } from "@/components/shared/spec-list";
import { SpecRow } from "@/components/shared/spec-row";
import { aboutContent } from "@/lib/about";

export default function AboutPage() {
  const {
    hero,
    whatWeAre,
    relationship,
    whatWeBring,
    principles,
    whoWeHelp,
    cta,
  } = aboutContent;

  return (
    <main className="bg-[#111827] text-[#F8FAFC]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0]/10">
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1440px] grid-cols-1 gap-8 px-margin pb-20 pt-24 md:gap-10 md:pb-24 md:pt-36 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="type-caption text-[9px] text-[#22B8F0]">
              {hero.section}
            </p>
          </div>

          <div className="min-w-0 max-w-[960px]">
            <p className="type-caption mb-7 text-[9px] text-[#64748B]">
              {hero.eyebrow}
            </p>

            <h1 className="type-display max-w-[950px] text-[clamp(2.75rem,9vw,8rem)]">
              {hero.title.line1}
              <br />
              {hero.title.line2}
              <br />
              <span className="text-[#22B8F0]">{hero.title.highlight}</span>
            </h1>

            <p className="type-body mt-8 max-w-[700px] text-base leading-8 text-[#94A3B8] md:mt-12 md:text-lg lg:text-xl">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE */}
      <PageSection sectionLabel={whatWeAre.section} tone="tint">
        <h2 className="type-h1 max-w-[1000px] text-[clamp(2.5rem,6vw,6.25rem)]">
          {whatWeAre.title.line1}
          <br />
          <span className="text-[#22B8F0]">{whatWeAre.title.highlight}</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {whatWeAre.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="type-body max-w-[500px] text-lg leading-8 text-[#94A3B8]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-[#22B8F0] pl-5 md:mt-14 md:pl-6">
          <p className="type-h2 text-2xl md:text-3xl">
            {whatWeAre.statement.line1}
            <br />
            <span className="text-[#22B8F0]">
              {whatWeAre.statement.highlight}
            </span>
          </p>
        </div>
      </PageSection>

      {/* RELATIONSHIP */}
      <PageSection sectionLabel={relationship.section} tone="dark">
        <p className="type-caption mb-7 text-[9px] text-[#64748B]">
          {relationship.eyebrow}
        </p>

        <h2 className="type-h1 max-w-[1000px] text-[clamp(2.5rem,6.5vw,7rem)]">
          {relationship.title.line1}
          <br />
          <span className="text-[#22B8F0]">{relationship.title.highlight}</span>
        </h2>

        <div className="mt-10 max-w-[800px] space-y-5 type-body text-lg leading-8 text-[#94A3B8] md:mt-12">
          {relationship.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageSection>

      {/* WHAT WE BRING */}
      <PageSection sectionLabel={whatWeBring.section} tone="light">
        <h2 className="type-h1 max-w-[850px] text-[clamp(2.5rem,6.5vw,7rem)]">
          {whatWeBring.title.line1}
          <br />
          <span className="text-[#22B8F0]">{whatWeBring.title.highlight}</span>
        </h2>

        <SpecList tone="light">
          {whatWeBring.capabilities.map((item) => (
            <SpecRow
              key={item.number}
              tone="light"
              number={item.number}
              title={item.title}
              description={item.description}
              columns="lg:grid-cols-[60px_200px_minmax(0,1fr)] xl:grid-cols-[64px_260px_minmax(0,1fr)]"
            />
          ))}
        </SpecList>

        <Link
          href="/capabilities"
          className="type-nav mt-8 inline-flex border border-[#111827]/20 px-6 py-4 text-[9px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111827] hover:text-[#F8FAFC]"
        >
          {whatWeBring.cta}&nbsp; ↗
        </Link>
      </PageSection>

      {/* PRINCIPLES */}
      <PageSection
        sectionLabel={principles.section}
        tone="light"
        className="border-t-0"
      >
        <h2 className="type-h1 max-w-[850px] text-[clamp(2.5rem,5.8vw,6rem)]">
          {principles.title.line1}
          <br />
          {principles.title.line2}
        </h2>

        <SpecList tone="light">
          {principles.items.map((item) => (
            <SpecRow
              key={item.number}
              tone="light"
              number={item.number}
              title={item.title}
              description={item.description}
              columns="lg:grid-cols-[60px_220px_minmax(0,1fr)] xl:grid-cols-[64px_300px_minmax(0,1fr)]"
            />
          ))}
        </SpecList>
      </PageSection>

      {/* WHO WE HELP */}
      <PageSection sectionLabel={whoWeHelp.section} tone="dark">
        <h2 className="type-h1 max-w-[900px] text-[clamp(2.5rem,5.8vw,6rem)]">
          {whoWeHelp.title.line1}
          <br />
          <span className="text-[#22B8F0]">{whoWeHelp.title.highlight}</span>
          <br />
          {whoWeHelp.title.line3}
        </h2>

        <p className="type-body mt-9 max-w-[760px] text-lg leading-8 text-[#94A3B8]">
          {whoWeHelp.description}
        </p>

        {/* Five across only from md — at sm each cell was ~128px, too narrow
            for a tracked label like "BUSINESSES". gap-px over a tinted
            wrapper draws the dividers, so they stay correct at 2, 3, or 5
            columns without per-breakpoint nth-child border rules. */}
        <div className="mt-10 grid grid-cols-2 gap-px border-y border-[#E2E8F0]/10 bg-[#E2E8F0]/10 sm:grid-cols-3 md:grid-cols-5">
          {whoWeHelp.clients.map((client, index) => (
            <div
              key={client}
              className="group bg-[#111827] px-4 py-5 transition-colors duration-300 hover:bg-[#1A2438]"
            >
              <div className="type-caption mb-2 text-[8px] text-[#475569]">
                0{index + 1}
              </div>
              <div className="type-nav text-[9px] text-[#F8FAFC] transition-colors duration-300 group-hover:text-[#22B8F0]">
                {client}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* FINAL CTA */}
      <PageSection sectionLabel={cta.section} tone="accent">
        <h2 className="type-display max-w-[900px] text-[clamp(2.75rem,7.5vw,8rem)]">
          {cta.title.line1}
          <br />
          {cta.title.line2}
        </h2>

        <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
          <Link
            href="/summon"
            className="type-nav bg-[#111827] px-7 py-5 text-[9px] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
          >
            {cta.primary}&nbsp; ↗
          </Link>
          <Link
            href="/capabilities"
            className="type-nav border border-[#111827]/30 px-7 py-5 text-[9px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-[#22B8F0]"
          >
            {cta.secondary}&nbsp; ↗
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
