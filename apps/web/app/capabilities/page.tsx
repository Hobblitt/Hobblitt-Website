import Link from "next/link";

import { PageSection } from "@/components/shared/page-section";
import { capabilitiesContent } from "@/lib/capabilities";

export default function CapabilitiesPage() {
  const { hero, capabilities, together, cta } = capabilitiesContent;

  return (
    <main className="overflow-hidden bg-[#111827]">
      {/* HERO */}
      <section className="relative border-b border-[#E2E8F0]/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44 lg:px-16 lg:pb-40">
          <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="type-caption text-[9px] text-[#22B8F0]">
                {hero.section}
              </p>
            </div>

            <div className="max-w-[1000px]">
              <p className="type-caption mb-7 text-[9px] text-[#64748B]">
                {hero.eyebrow}
              </p>

              <h1 className="type-h1 max-w-[950px] text-[clamp(4rem,8vw,8.5rem)] text-[#F8FAFC]">
                {hero.title.line1}
                <br />
                {hero.title.line2}
                <br />
                <span className="text-[#22B8F0]">{hero.title.highlight}</span>
              </h1>

              <p className="type-body mt-10 max-w-[720px] text-[17px] leading-8 text-[#94A3B8] md:text-[19px]">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — the four rows, each carrying its own service tags,
          per spec pg. 13 note: Strategy is not a fifth row here, it's the
          connective framing in the "together" section below. */}
      <PageSection
        sectionLabel={capabilities.section}
        tone="light"
        className="border-t-0"
      >
        <div className="mb-16 max-w-[850px]">
          <h2 className="type-h1 text-[clamp(3.5rem,6vw,6.5rem)]">
            {capabilities.title.line1}
            <br />
            <span className="text-[#22B8F0]">
              {capabilities.title.highlight}
            </span>
          </h2>
        </div>

        <div className="border-t border-[#CBD5E1]">
          {capabilities.items.map((capability) => (
            <article
              key={capability.number}
              className="group border-b border-[#CBD5E1] py-12 md:py-16"
            >
              <div className="grid gap-8 md:grid-cols-[60px_220px_1fr] md:gap-10 lg:grid-cols-[70px_260px_1fr]">
                <span className="type-caption text-[9px] text-[#0EA5E9]">
                  {capability.number}
                </span>

                <h3 className="type-h2 text-2xl md:text-3xl">
                  {capability.title}
                </h3>

                <div>
                  <p className="type-body max-w-[650px] text-[16px] leading-7 text-[#64748B] md:text-[17px]">
                    {capability.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {capability.services.map((service) => (
                      <span
                        key={service}
                        className="type-caption border border-[#CBD5E1] px-3 py-2 text-[8px] text-[#475569] transition-colors duration-300 group-hover:border-[#94A3B8]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* HOW THEY WORK TOGETHER */}
      <PageSection sectionLabel={together.section} tone="tint">
        <p className="type-caption mb-7 text-[9px] text-[#64748B]">
          {together.eyebrow}
        </p>

        <h2 className="type-h1 max-w-[1000px] text-[clamp(3.5rem,6vw,6.8rem)] text-[#F8FAFC]">
          {together.title.line1}
          <br />
          <span className="text-[#22B8F0]">{together.title.highlight}</span>
        </h2>

        <div className="mt-14 grid max-w-[950px] gap-10 border-t border-[#E2E8F0]/10 pt-10 md:grid-cols-2">
          {together.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="type-body text-[16px] leading-8 text-[#94A3B8]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection sectionLabel={cta.section} tone="accent">
        <h2 className="type-h1 max-w-[1000px] text-[clamp(4rem,7vw,7.5rem)]">
          {cta.title.line1}
          <br />
          {cta.title.line2}
        </h2>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/summon"
            className="type-nav inline-flex items-center gap-6 border border-[#111827] bg-[#111827] px-7 py-5 text-[9px] text-[#22B8F0] transition-all duration-300 hover:bg-transparent hover:text-[#111827]"
          >
            <span>{cta.primary}</span>
            <span aria-hidden="true">↗</span>
          </Link>

          <Link
            href="/approach"
            className="type-nav inline-flex items-center gap-6 border border-[#111827]/30 px-7 py-5 text-[9px] transition-all duration-300 hover:border-[#111827] hover:bg-[#111827] hover:text-[#22B8F0]"
          >
            <span>{cta.secondary}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
