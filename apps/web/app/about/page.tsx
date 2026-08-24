import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "PARTNERS, NOT VENDORS",
    description:
      "We do not want to simply receive a brief, execute it, and disappear. We want to understand the problem with you and stay close enough to help solve it.",
  },
  {
    number: "02",
    title: "PROBLEMS BEFORE SOLUTIONS",
    description:
      "You do not need to know which technology, platform, or service you need. Bring us the problem. We will help figure out what actually makes sense.",
  },
  {
    number: "03",
    title: "ONE TEAM, MANY CAPABILITIES",
    description:
      "Design, engineering, automation, strategy, and growth should not have to live in separate conversations. We bring the right capabilities together around the problem.",
  },
  {
    number: "04",
    title: "BUILD FORWARD",
    description:
      "The goal is not simply to launch something. It is to create something that can improve, adapt, automate, and grow with the business.",
  },
];

const whoWeWorkWith = ["STARTUPS", "BRANDS", "BUSINESSES", "FOUNDERS", "TEAMS"];

export default function AboutPage() {
  return (
    <main className="bg-[#0B1120] text-[#F8FAFC]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden px-margin pb-28 pt-20 md:pb-40 md:pt-28">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
            {/* Label */}

            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
                01 / ABOUT HOBBLITT
              </span>
            </div>

            {/* Main */}

            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#64748B]">
                THE PEOPLE YOU CALL WHEN THINGS GET STUCK.
              </p>

              <h1 className="mt-5 max-w-6xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] md:text-7xl lg:text-[7.5rem]">
                We&apos;re here
                <br />
                to move things
                <br />
                <span className="text-[#22B8F0]">forward.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg md:leading-8">
                Hobblitt is a technology and creative partner for businesses
                building what comes next. We help teams build products, automate
                operations, solve problems, and find new ways to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT HOBBLITT IS
      ========================================================= */}

      <section
        id="about"
        className="border-t border-white/10 bg-[#101A2E] px-margin py-24 md:py-32"
      >
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
                02 / WHAT WE ARE
              </span>
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                Not just another agency.
                <br />
                <span className="text-[#22B8F0]">
                  Not just another dev shop.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-base leading-7 text-[#94A3B8] md:text-lg">
                  Sometimes you need someone to build the thing. Sometimes you
                  need someone to figure out what the thing should be first.
                </p>

                <p className="text-base leading-7 text-[#94A3B8] md:text-lg">
                  Hobblitt exists somewhere in between strategy, technology,
                  creativity, and execution — bringing the right pieces together
                  when a business needs to move.
                </p>
              </div>

              <div className="mt-12 border-l-2 border-[#22B8F0] pl-6">
                <p className="font-display text-2xl font-bold leading-tight tracking-[-0.025em] md:text-3xl">
                  You don&apos;t have to arrive with the answer.
                  <br />
                  <span className="text-[#22B8F0]">
                    Just bring us the problem.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERS
      ========================================================= */}

      <section className="border-t border-white/10 bg-[#0B1120] px-margin py-24 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
                03 / THE RELATIONSHIP
              </span>
            </div>

            <div>
              <p className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#64748B]">
                PARTNERS, NOT VENDORS.
              </p>

              <h2 className="mt-5 max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                When your back is
                <br />
                against the wall,
                <br />
                <span className="text-[#22B8F0]">call Hobblitt.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg md:leading-8">
                We want to be the team you can call when something important is
                stuck. A product needs building. A process needs automating. A
                campaign needs direction. A business needs to grow.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg md:leading-8">
                One tap is enough. Tell us what is happening. We listen first,
                then bring the right people and capabilities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}

      <section className="border-t border-white/10 bg-[#F1F5F9] px-margin py-24 text-[#0B1120] md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#0891B2]">
                04 / HOW WE THINK
              </span>
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.05em] md:text-7xl">
                Four things
                <br />
                we believe.
              </h2>

              <div className="mt-14 border-t border-[#CBD5E1]">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="grid gap-6 border-b border-[#CBD5E1] py-8 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start"
                  >
                    <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#0891B2]">
                      {principle.number}
                    </span>

                    <h3 className="font-display text-xl font-bold tracking-[-0.025em] md:text-2xl">
                      {principle.title}
                    </h3>

                    <p className="max-w-xl text-sm leading-6 text-[#64748B] md:text-base">
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}

      <section className="border-t border-white/10 bg-[#0B1120] px-margin py-24 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
                05 / WHO WE HELP
              </span>
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em] md:text-6xl">
                If you&apos;re trying to
                <br />
                <span className="text-[#22B8F0]">build something better,</span>
                <br />
                we should talk.
              </h2>

              <div className="mt-14 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-5">
                {whoWeWorkWith.map((type, index) => (
                  <div
                    key={type}
                    className="flex items-center gap-4 border-b border-white/10 px-5 py-6 last:border-b-0 sm:nth-[2n]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span className="font-mono text-[8px] text-[#475569]">
                      0{index + 1}
                    </span>

                    <span className="font-mono text-[9px] font-bold tracking-[0.14em]">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="border-t border-[#07111D]/20 bg-[#22B8F0] px-margin py-24 text-[#07111D] md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.18em]">
                06 / NEXT MOVE
              </span>
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-5xl font-bold leading-[0.88] tracking-[-0.055em] md:text-7xl lg:text-8xl">
                Got something
                <br />
                worth building?
              </h2>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/summon"
                  className="group inline-flex h-14 items-center justify-between gap-10 bg-[#07111D] px-6 font-mono text-[9px] font-bold tracking-[0.16em] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
                >
                  SUMMON HOBBLITT
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/capabilities"
                  className="inline-flex h-14 items-center justify-between gap-10 border border-[#07111D]/30 px-6 font-mono text-[9px] font-bold tracking-[0.16em] transition-all duration-300 hover:border-[#07111D] hover:bg-[#07111D]/5"
                >
                  SEE CAPABILITIES
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
