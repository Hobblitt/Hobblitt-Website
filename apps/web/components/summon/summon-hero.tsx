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

      <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-16">
        <p className="type-caption text-[9px] text-[#22B8F0]">
          01 / SUMMON HOBBLITT
        </p>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <h1 className="type-h1 max-w-[1000px] text-[clamp(3.5rem,7.5vw,7.5rem)]">
              Got something
              <br />
              worth
              <br />
              <span className="text-[#22B8F0]">building?</span>
            </h1>

            <p className="type-body mt-10 max-w-[600px] text-[17px] leading-8 text-[#94A3B8]">
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
