import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "LISTEN",
    description:
      "Tell us what's stuck. You don't need to arrive with the perfect brief.",
  },
  {
    number: "02",
    title: "ASSEMBLE",
    description:
      "We understand the problem, the business, and what capabilities it actually needs.",
  },
  {
    number: "03",
    title: "BUILD",
    description:
      "We bring the right people, technology, creativity, and strategy together.",
  },
  {
    number: "04",
    title: "MOVE",
    description:
      "Launch it. Improve it. Automate it. Grow it. Then keep moving forward.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="approach"
      className="border-t border-slate-700/30 bg-[#0b1120] py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[0.32fr_0.68fr]">
          {/* Section label */}
          <div>
            <p className="font-stamp text-[9px] font-bold uppercase tracking-[0.18em] text-[#22b8f0]">
              04 / HOW WE WORK
            </p>
          </div>

          {/* Content */}
          <div>
            <p className="mb-5 font-stamp text-[10px] uppercase tracking-[0.16em] text-slate-400">
              DON&apos;T BRING US A BRIEF.
            </p>

            <h2 className="max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#f8fafc] md:text-6xl lg:text-7xl">
              Bring us the <span className="text-[#22b8f0]">problem.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-body text-base leading-7 text-slate-400 md:text-lg">
              You don&apos;t need to know exactly what you need before you call
              us. Tell us where you&apos;re stuck. We listen, understand the
              business, bring together the right capabilities, and build with
              you.
            </p>

            <div className="mt-16 grid border border-slate-700/50 md:grid-cols-2">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="group min-h-[240px] border-b border-slate-700/50 p-7 transition-colors duration-300 hover:bg-[#101a2e] md:[&:nth-child(odd)]:border-r md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-stamp text-[9px] font-bold tracking-[0.18em] text-[#22b8f0]">
                      {step.number}
                    </span>

                    <ArrowUpRight
                      className="size-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#22b8f0]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-20">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.035em] text-[#f8fafc]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-sm font-body text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[#22b8f0]" />

              <span className="font-stamp text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                PARTNERS · NOT VENDORS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
