import Link from "next/link";

import { capabilitiesContent } from "@/lib/capabilities";

export default function CapabilitiesPage() {
  const { hero, capabilities, together, cta } = capabilitiesContent;

  return (
    <main className="overflow-hidden bg-[#0B1120]">
      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="relative border-b border-[#1E293B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44 lg:px-16 lg:pb-40">
          <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.22em] text-[#22B8F0]">
                {hero.section}
              </p>
            </div>

            <div className="max-w-[1000px]">
              <p className="mb-7 font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-[#64748B]">
                {hero.eyebrow}
              </p>

              <h1 className="max-w-[950px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-[#F8FAFC]">
                {hero.title.line1}
                <br />
                {hero.title.line2}
                <br />
                <span className="text-[#22B8F0]">{hero.title.highlight}</span>
              </h1>

              <p className="mt-10 max-w-[720px] text-[17px] leading-8 text-[#94A3B8] md:text-[19px]">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
          ========================================================= */}

      <section className="bg-[#F1F5F9] text-[#0B1120]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.22em] text-[#0EA5E9]">
                {capabilities.section}
              </p>
            </div>

            <div>
              <div className="mb-16 max-w-[850px]">
                <h2 className="text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
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
                      <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#0EA5E9]">
                        {capability.number}
                      </span>

                      <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                        {capability.title}
                      </h3>

                      <div>
                        <p className="max-w-[650px] text-[16px] leading-7 text-[#64748B] md:text-[17px]">
                          {capability.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {capability.services.map((service) => (
                            <span
                              key={service}
                              className="
                                border border-[#CBD5E1]
                                px-3 py-2
                                font-mono text-[8px] font-bold
                                uppercase tracking-[0.16em]
                                text-[#475569]
                                transition-colors duration-300
                                group-hover:border-[#94A3B8]
                              "
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
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW THEY WORK TOGETHER
          ========================================================= */}

      <section className="bg-[#111C33]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.22em] text-[#22B8F0]">
                {together.section}
              </p>
            </div>

            <div>
              <p className="mb-7 font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-[#64748B]">
                {together.eyebrow}
              </p>

              <h2 className="max-w-[1000px] text-[clamp(3.5rem,6vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#F8FAFC]">
                {together.title.line1}
                <br />
                <span className="text-[#22B8F0]">
                  {together.title.highlight}
                </span>
              </h2>

              <div className="mt-14 grid max-w-[950px] gap-10 border-t border-[#1E293B] pt-10 md:grid-cols-2">
                {together.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[16px] leading-8 text-[#94A3B8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
          ========================================================= */}

      <section className="bg-[#22B8F0] text-[#0B1120]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.22em]">
                {cta.section}
              </p>
            </div>

            <div>
              <h2 className="max-w-[1000px] text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
                {cta.title.line1}
                <br />
                {cta.title.line2}
              </h2>

              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  href="/summon"
                  className="
                    inline-flex items-center gap-6
                    border border-[#0B1120]
                    bg-[#0B1120]
                    px-7 py-5
                    font-mono text-[9px] font-bold
                    tracking-[0.18em]
                    text-[#22B8F0]
                    transition-all duration-300
                    hover:bg-transparent
                    hover:text-[#0B1120]
                  "
                >
                  <span>{cta.primary}</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/approach"
                  className="
                    inline-flex items-center gap-6
                    border border-[#0B1120]/30
                    px-7 py-5
                    font-mono text-[9px] font-bold
                    tracking-[0.18em]
                    transition-all duration-300
                    hover:border-[#0B1120]
                    hover:bg-[#0B1120]
                    hover:text-[#22B8F0]
                  "
                >
                  <span>{cta.secondary}</span>
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
