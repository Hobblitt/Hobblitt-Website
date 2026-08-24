import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  pricingEngagements,
  pricingFaqs,
  pricingPrinciples,
} from "@/lib/pricing";

export default function PricingPage() {
  return (
    <main className="bg-[#0B1120] text-[#F8FAFC]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] grid-cols-1 gap-16 px-6 pb-24 pt-32 md:grid-cols-[260px_1fr] md:px-10 md:pt-40 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">01 / PRICING</p>
          </div>

          <div className="max-w-[1050px]">
            <p className="mb-8 font-mono text-[9px] font-bold tracking-[0.2em] text-[#64748B]">
              THE WORK DEFINES THE ENGAGEMENT.
            </p>

            <h1 className="font-display text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              The right
              <br />
              way to work
              <br />
              <span className="text-[#22B8F0]">depends on the problem.</span>
            </h1>

            <p className="mt-12 max-w-[760px] font-body text-lg leading-8 text-[#94A3B8] md:text-xl">
              There is no single Hobblitt package. We start with what you are
              trying to achieve, understand what is getting in the way, and
              shape the engagement around the work that actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGAGEMENTS
      ========================================================= */}

      <section className="border-b border-slate-300 bg-[#E9EFF7] px-margin py-24 text-[#0B1120] md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 md:grid-cols-[260px_1fr]">
            <div>
              <p className="section-label text-[#22B8F0]">02 / ENGAGEMENT</p>
            </div>

            <div>
              <h2 className="font-display max-w-[1000px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
                Three ways to work together.
                <br />
                <span className="text-[#22B8F0]">One direction.</span>
              </h2>

              <div className="mt-20 border-t border-slate-300">
                {pricingEngagements.map((engagement) => (
                  <article
                    key={engagement.number}
                    className="grid gap-10 border-b border-slate-300 py-12 md:grid-cols-[80px_240px_1fr] md:gap-8 md:py-16"
                  >
                    <div>
                      <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
                        {engagement.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-[-0.04em] md:text-3xl">
                        {engagement.title}
                      </h3>

                      <p className="mt-4 max-w-[220px] font-mono text-[8px] font-bold leading-5 tracking-[0.14em] text-[#64748B]">
                        {engagement.bestFor}
                      </p>
                    </div>

                    <div>
                      <p className="max-w-[700px] text-lg leading-8 text-[#64748B]">
                        {engagement.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {engagement.points.map((point) => (
                          <span
                            key={point}
                            className="border border-slate-300 px-4 py-2 font-mono text-[8px] font-bold tracking-[0.14em] text-[#475569]"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING PRINCIPLE
      ========================================================= */}

      <section className="border-b border-white/10 bg-[#0B1120]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[260px_1fr] md:px-10 md:py-32 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">03 / THE PRINCIPLE</p>
          </div>

          <div>
            <h2 className="font-display max-w-[1050px] text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
              We price the
              <br />
              <span className="text-[#22B8F0]">work.</span>
              <br />
              Not a checklist.
            </h2>

            <p className="mt-12 max-w-[780px] text-lg leading-8 text-[#94A3B8] md:text-xl">
              The scope should follow the problem, not the other way around. We
              would rather understand what needs to happen and build the right
              engagement than sell you a package that does not fit.
            </p>

            <div className="mt-20 border-t border-white/10">
              {pricingPrinciples.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[80px_280px_1fr] md:gap-8"
                >
                  <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
                    {principle.number}
                  </span>

                  <h3 className="font-display text-xl font-bold tracking-[-0.03em]">
                    {principle.title}
                  </h3>

                  <p className="max-w-[650px] text-base leading-7 text-[#94A3B8]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="border-b border-slate-300 bg-[#E9EFF7] px-margin py-24 text-[#0B1120] md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 md:grid-cols-[260px_1fr] md:px-0">
          <div>
            <p className="section-label text-[#22B8F0]">04 / QUESTIONS</p>
          </div>

          <div>
            <h2 className="font-display max-w-[900px] text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              A few things
              <br />
              worth knowing.
            </h2>

            <div className="mt-16 border-t border-slate-300">
              {pricingFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="grid gap-6 border-b border-slate-300 py-10 md:grid-cols-[300px_1fr] md:gap-12"
                >
                  <h3 className="font-display text-xl font-bold tracking-[-0.03em]">
                    {faq.question}
                  </h3>

                  <p className="max-w-[700px] text-base leading-7 text-[#64748B]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#22B8F0] text-[#0B1120]">
        <div className="mx-auto grid min-h-[520px] max-w-[1440px] grid-cols-1 gap-16 px-6 py-24 md:grid-cols-[260px_1fr] md:px-10 md:py-32 lg:px-16">
          <div>
            <p className="section-label text-[#0B1120]">05 / NEXT MOVE</p>
          </div>

          <div>
            <h2 className="font-display max-w-[950px] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
              Got something
              <br />
              worth building?
            </h2>

            <p className="mt-10 max-w-[650px] text-lg leading-8 text-[#0B1120]/70">
              Tell us what is stuck, what you are trying to build, or where you
              want to go next. We will figure out the right place to start.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/summon"
                className="group flex items-center gap-8 bg-[#0B1120] px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
              >
                SUMMON HOBBLITT
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/approach"
                className="group flex items-center gap-8 border border-[#0B1120]/30 px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] transition-colors duration-300 hover:bg-[#0B1120] hover:text-[#22B8F0]"
              >
                SEE OUR APPROACH
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
