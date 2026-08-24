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
      className="border-t border-[#E2E8F0]/10 bg-[#111827] py-28 md:py-36"
    >
      <div className="mx-auto max-w-screen-2xl px-margin">
        <div className="grid gap-16 md:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="type-caption text-[9px] text-[#22B8F0]">
              05 / HOW WE WORK
            </p>
          </div>

          <div>
            <p className="type-caption mb-5 text-[10px] text-[#94A3B8]">
              DON&apos;T BRING US A BRIEF.
            </p>

            <h2 className="type-h1 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              Bring us the <span className="text-[#22B8F0]">problem.</span>
            </h2>

            <p className="type-body mt-8 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg">
              You don&apos;t need to know exactly what you need before you call
              us. Tell us where you&apos;re stuck. We listen, understand the
              business, bring together the right capabilities, and build with
              you.
            </p>

            <div className="mt-16 grid border border-[#E2E8F0]/10 md:grid-cols-2">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="group min-h-[240px] border-b border-[#E2E8F0]/10 p-7 transition-colors duration-300 hover:bg-[#1A2438] md:[&:nth-child(odd)]:border-r md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0"
                >
                  <div className="flex items-start justify-between">
                    <span className="type-caption text-[9px] text-[#22B8F0]">
                      {step.number}
                    </span>
                    <ArrowUpRight className="size-4 text-[#475569] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#22B8F0]" />
                  </div>

                  <div className="mt-20">
                    <h3 className="type-h2 text-2xl text-[#F8FAFC]">
                      {step.title}
                    </h3>
                    <p className="type-body mt-3 max-w-sm text-sm leading-6 text-[#94A3B8]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[#22B8F0]" />
              <span className="type-caption text-[9px] text-[#64748B]">
                PARTNERS · NOT VENDORS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
