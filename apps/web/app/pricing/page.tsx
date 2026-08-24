import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageSection } from "@/components/shared/page-section";
import { SpecList } from "@/components/shared/spec-list";
import { SpecRow } from "@/components/shared/spec-row";
import {
  pricingEngagements,
  pricingFaqs,
  pricingPrinciples,
} from "@/lib/pricing";

export default function PricingPage() {
  return (
    <main className="bg-[#111827] text-[#F8FAFC]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#E2E8F0]/10">
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] grid-cols-1 gap-16 px-6 pb-24 pt-32 md:grid-cols-[260px_1fr] md:px-10 md:pt-40 lg:px-16">
          <div>
            <p className="type-caption text-[9px] text-[#22B8F0]">
              01 / PRICING
            </p>
          </div>

          <div className="max-w-[1050px]">
            <p className="type-caption mb-8 text-[9px] text-[#64748B]">
              THE WORK DEFINES THE ENGAGEMENT.
            </p>

            <h1 className="type-h1 text-[clamp(4rem,8vw,8.5rem)]">
              The right
              <br />
              way to work
              <br />
              <span className="text-[#22B8F0]">depends on the problem.</span>
            </h1>

            <p className="type-body mt-12 max-w-[760px] text-lg leading-8 text-[#94A3B8] md:text-xl">
              There is no single Hobblitt package. We start with what you are
              trying to achieve, understand what is getting in the way, and
              shape the engagement around the work that actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <PageSection sectionLabel="02 / ENGAGEMENT" tone="light">
        <h2 className="type-h1 max-w-[1000px] text-[clamp(3.5rem,6vw,6.5rem)]">
          Three ways to work together.
          <br />
          <span className="text-[#22B8F0]">One direction.</span>
        </h2>

        <SpecList tone="light">
          {pricingEngagements.map((engagement) => (
            <SpecRow
              key={engagement.number}
              tone="light"
              columns="md:grid-cols-[80px_240px_1fr]"
              number={engagement.number}
              title={engagement.title}
              description={engagement.description}
              meta={
                <>
                  <p className="type-caption mt-4 max-w-[220px] text-[8px] leading-5 text-[#64748B]">
                    {engagement.bestFor}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {engagement.points.map((point) => (
                      <span
                        key={point}
                        className="type-caption border border-[#CBD5E1] px-4 py-2 text-[8px] text-[#475569]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </>
              }
            />
          ))}
        </SpecList>
      </PageSection>

      {/* PRICING PRINCIPLE */}
      <PageSection sectionLabel="03 / THE PRINCIPLE" tone="dark">
        <h2 className="type-h1 max-w-[1050px] text-[clamp(3.5rem,7vw,7.5rem)]">
          We price the
          <br />
          <span className="text-[#22B8F0]">work.</span>
          <br />
          Not a checklist.
        </h2>

        <p className="type-body mt-12 max-w-[780px] text-lg leading-8 text-[#94A3B8] md:text-xl">
          The scope should follow the problem, not the other way around. We
          would rather understand what needs to happen and build the right
          engagement than sell you a package that does not fit.
        </p>

        <SpecList tone="dark">
          {pricingPrinciples.map((principle) => (
            <SpecRow
              key={principle.number}
              tone="dark"
              columns="md:grid-cols-[80px_280px_1fr]"
              number={principle.number}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </SpecList>
      </PageSection>

      {/* FAQ */}
      <PageSection sectionLabel="04 / QUESTIONS" tone="light">
        <h2 className="type-h1 max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)]">
          A few things
          <br />
          worth knowing.
        </h2>

        <SpecList tone="light">
          {pricingFaqs.map((faq) => (
            <SpecRow
              key={faq.question}
              tone="light"
              columns="md:grid-cols-[300px_1fr]"
              title={faq.question}
              description={faq.answer}
            />
          ))}
        </SpecList>
      </PageSection>

      {/* FINAL CTA */}
      <PageSection
        sectionLabel="05 / NEXT MOVE"
        tone="accent"
        className="min-h-[520px]"
      >
        <h2 className="type-display max-w-[950px] text-[clamp(4rem,8vw,8rem)]">
          Got something
          <br />
          worth building?
        </h2>

        <p className="type-body mt-10 max-w-[650px] text-lg leading-8 text-[#111827]/70">
          Tell us what is stuck, what you are trying to build, or where you want
          to go next. We will figure out the right place to start.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/summon"
            className="group type-nav flex items-center gap-8 bg-[#111827] px-7 py-5 text-[9px] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
          >
            SUMMON HOBBLITT
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/approach"
            className="group type-nav flex items-center gap-8 border border-[#111827]/30 px-7 py-5 text-[9px] transition-colors duration-300 hover:bg-[#111827] hover:text-[#22B8F0]"
          >
            SEE OUR APPROACH
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
