import { ArrowUpRight, Phone } from "lucide-react";

export function SummonHobblitt() {
  return (
    <section
      id="summon"
      className="relative overflow-hidden border-t border-white/10 bg-[#22B8F0] px-margin py-28 text-[#07111D] md:py-40"
    >
      {/* Background signal */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#07111D]" />

        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#07111D]" />

        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#07111D]" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
          {/* Label */}
          <div>
            <span className="font-mono text-[9px] font-bold tracking-[0.18em]">
              07 / SUMMON
            </span>
          </div>

          {/* Main */}
          <div>
            <p className="font-mono text-[9px] font-bold tracking-[0.18em] opacity-60">
              GOT SOMETHING WORTH BUILDING?
            </p>

            <h2 className="mt-5 max-w-5xl font-[var(--font-space-grotesk)] text-6xl font-bold leading-[0.86] tracking-[-0.06em] md:text-8xl lg:text-[9rem]">
              HIT A WALL?
              <br />
              <span className="opacity-60">SUMMON</span>
              <br />
              HOBBLITT.
            </h2>

            <p className="mt-10 max-w-xl text-base leading-7 opacity-70 md:text-lg">
              You don&apos;t need the perfect brief. You don&apos;t even need to
              know exactly what you need yet.
              <br />
              <br />
              Tell us what&apos;s stuck. We&apos;ll figure out the rest.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@hobblitt.com"
                className="group inline-flex h-14 items-center justify-between gap-10 bg-[#07111D] px-6 font-mono text-[9px] font-bold tracking-[0.16em] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
              >
                EMAIL HOBBLITT
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="tel:+910000000000"
                className="inline-flex h-14 items-center justify-between gap-10 border border-[#07111D]/30 px-6 font-mono text-[9px] font-bold tracking-[0.16em] transition-all duration-300 hover:border-[#07111D] hover:bg-[#07111D]/5"
              >
                <span className="flex items-center gap-3">
                  <Phone className="size-3" />
                  CALL US
                </span>

                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <p className="mt-5 font-mono text-[8px] tracking-[0.14em] opacity-50">
              ONE TAP IS ENOUGH.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
