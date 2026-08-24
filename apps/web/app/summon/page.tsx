import Link from "next/link";

export default function SummonPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-[#F8FAFC]">
      <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1440px] flex-col justify-center px-6 py-24 md:px-10 lg:px-16">
        <p className="mb-8 font-mono text-[9px] font-bold tracking-[0.22em] text-[#22B8F0]">
          01 / SUMMON HOBBLITT
        </p>

        <h1 className="max-w-[1000px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
          Got something
          <br />
          worth
          <br />
          <span className="text-[#22B8F0]">building?</span>
        </h1>

        <p className="mt-10 max-w-[650px] text-[17px] leading-8 text-[#94A3B8]">
          Tell us what you are trying to build, fix, improve, or figure out.
          We&apos;ll start there.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="mailto:hello@hobblitt.com"
            className="inline-flex items-center gap-6 bg-[#22B8F0] px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] text-[#0B1120] transition-transform duration-300 hover:-translate-y-1"
          >
            START A CONVERSATION
            <span>↗</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-6 border border-white/20 px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] text-[#F8FAFC] transition-colors duration-300 hover:border-[#22B8F0] hover:text-[#22B8F0]"
          >
            BACK HOME
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
