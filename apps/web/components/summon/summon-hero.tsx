const expectations = [
  {
    label: "WHO REPLIES",
    detail: "A founder or lead — not a ticketing system.",
  },
  { label: "TYPICAL RESPONSE", detail: "1–2 business days, usually faster." },
  {
    label: "FIRST CALL",
    detail: "A conversation about the problem — no sales script.",
  },
];

export function SummonHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0]/10">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#22B8F0]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-margin pb-20 pt-24 md:pb-24 md:pt-36">
        <p className="type-caption text-[9px] text-[#22B8F0]">
          01 / SUMMON HOBBLITT
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_minmax(0,0.85fr)] lg:items-end lg:gap-14">
          <div className="min-w-0">
            <h1 className="type-h1 max-w-[1000px] text-[clamp(2.75rem,7.5vw,7.5rem)]">
              Got something
              <br />
              worth
              <br />
              <span className="text-[#22B8F0]">building?</span>
            </h1>

            <p className="type-body mt-8 max-w-[600px] text-base leading-8 text-[#94A3B8] md:mt-10 md:text-[17px]">
              Tell us what is stuck, what you are trying to build, or where you
              want to go next. We will figure out the right place to start.
            </p>
          </div>

          {/* Fills the right column instead of leaving it blank */}
          <div className="border border-[#E2E8F0]/10 bg-[#0B1120]/60">
            {expectations.map((item, index) => (
              <div
                key={item.label}
                className={`px-6 py-5 ${index !== expectations.length - 1 ? "border-b border-[#E2E8F0]/10" : ""}`}
              >
                <p className="type-caption text-[8px] text-[#22B8F0]">
                  {item.label}
                </p>
                <p className="type-body mt-2 text-sm leading-6 text-[#94A3B8]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
