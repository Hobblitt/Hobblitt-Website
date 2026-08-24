import Link from "next/link";

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

const capabilities = [
  {
    number: "01",
    title: "PRODUCT",
    description: "Turning ideas into useful digital products.",
  },
  {
    number: "02",
    title: "ENGINEERING",
    description: "Building reliable software and technical systems.",
  },
  {
    number: "03",
    title: "AUTOMATION",
    description: "Removing repetitive work with intelligent systems.",
  },
  {
    number: "04",
    title: "GROWTH",
    description: "Helping businesses turn technology into momentum.",
  },
];

const clients = ["STARTUPS", "BRANDS", "BUSINESSES", "FOUNDERS", "TEAMS"];

export default function AboutPage() {
  return (
    <main className="bg-[#0B1120] text-[#F8FAFC]">
      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] grid-cols-1 gap-12 px-6 pb-20 pt-28 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:pb-24 md:pt-36 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">01 / ABOUT HOBBLITT</p>
          </div>

          <div className="max-w-[960px]">
            <p className="mb-7 font-mono text-[9px] font-bold tracking-[0.2em] text-[#64748B]">
              THE PEOPLE YOU CALL WHEN THINGS GET STUCK.
            </p>

            <h1 className="max-w-[950px] font-display text-[clamp(3.75rem,7.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              We&apos;re here
              <br />
              to move things
              <br />
              <span className="text-[#22B8F0]">forward.</span>
            </h1>

            <p className="mt-10 max-w-[700px] font-body text-lg leading-8 text-[#94A3B8] md:mt-12 md:text-xl">
              Hobblitt is a technology and creative partner for businesses
              building what comes next. We help teams build products, automate
              operations, solve problems, and find new ways to grow.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE ARE
          ========================================================= */}

      <section className="border-b border-white/10 bg-[#111C33]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:py-28 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">02 / WHAT WE ARE</p>
          </div>

          <div className="max-w-[1080px]">
            <h2 className="max-w-[1000px] font-display text-[clamp(3rem,6vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              Not just another agency.
              <br />
              <span className="text-[#22B8F0]">Not just another dev shop.</span>
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="max-w-[500px] font-body text-lg leading-8 text-[#94A3B8]">
                Sometimes you need someone to build the thing. Sometimes you
                need someone to figure out what the thing should be first.
              </p>

              <p className="max-w-[500px] font-body text-lg leading-8 text-[#94A3B8]">
                Hobblitt exists somewhere in between strategy, technology,
                creativity, and execution — bringing the right pieces together
                when a business needs to move.
              </p>
            </div>

            <div className="mt-12 border-l-2 border-[#22B8F0] pl-5 md:mt-14 md:pl-6">
              <p className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                You don&apos;t have to arrive with the answer.
                <br />
                <span className="text-[#22B8F0]">
                  Just bring us the problem.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATIONSHIP
          ========================================================= */}

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:py-28 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">
              03 / THE RELATIONSHIP
            </p>
          </div>

          <div className="max-w-[1050px]">
            <p className="mb-7 font-mono text-[9px] font-bold tracking-[0.2em] text-[#64748B]">
              PARTNERS, NOT VENDORS.
            </p>

            <h2 className="max-w-[1000px] font-display text-[clamp(3.25rem,6.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              When your back is against the wall,
              <br />
              <span className="text-[#22B8F0]">call Hobblitt.</span>
            </h2>

            <div className="mt-10 max-w-[800px] space-y-5 font-body text-lg leading-8 text-[#94A3B8] md:mt-12">
              <p>
                We want to be the team you can call when something important is
                stuck. A product needs building. A process needs automating. A
                campaign needs direction. A business needs to grow.
              </p>

              <p>
                One tap is enough. Tell us what is happening. We listen first,
                then bring the right people and capabilities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BRING
          ========================================================= */}

      <section className="bg-[#F1F5F9] text-[#0B1120]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:py-28 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">04 / WHAT WE BRING</p>
          </div>

          <div className="max-w-[1050px]">
            <h2 className="max-w-[850px] font-display text-[clamp(3.5rem,6.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              One problem.
              <br />
              <span className="text-[#22B8F0]">Many capabilities.</span>
            </h2>

            <div className="mt-14 border-t border-[#CBD5E1]">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-[#CBD5E1] py-7 transition-colors duration-300 hover:bg-white/50 md:grid-cols-[64px_260px_1fr] md:gap-6 md:py-8"
                >
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#22B8F0]">
                    {item.number}
                  </span>

                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="max-w-[520px] font-body text-base leading-7 text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/capabilities"
              className="mt-8 inline-flex border border-[#0B1120]/20 px-6 py-4 font-mono text-[9px] font-bold tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B1120] hover:text-[#F8FAFC]"
            >
              EXPLORE CAPABILITIES&nbsp; ↗
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
          ========================================================= */}

      <section className="border-t border-[#CBD5E1] bg-[#F1F5F9] text-[#0B1120]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:pb-28 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">05 / HOW WE THINK</p>
          </div>

          <div className="max-w-[1050px]">
            <h2 className="max-w-[850px] font-display text-[clamp(3rem,5.8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              Four things
              <br />
              we believe.
            </h2>

            <div className="mt-14 border-t border-[#CBD5E1]">
              {principles.map((item) => (
                <div
                  key={item.number}
                  className="group grid gap-5 border-b border-[#CBD5E1] py-8 transition-colors duration-300 hover:bg-white/50 md:grid-cols-[64px_300px_1fr] md:gap-6 md:py-9"
                >
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#22B8F0]">
                    {item.number}
                  </span>

                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="max-w-[560px] font-body text-base leading-7 text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE HELP
          ========================================================= */}

      <section className="border-t border-white/10 bg-[#0B1120]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:py-28 lg:px-16">
          <div>
            <p className="section-label text-[#22B8F0]">06 / WHO WE HELP</p>
          </div>

          <div className="max-w-[1050px]">
            <h2 className="max-w-[900px] font-display text-[clamp(3rem,5.8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              If you&apos;re trying to
              <br />
              <span className="text-[#22B8F0]">build something better,</span>
              <br />
              we should talk.
            </h2>

            <p className="mt-9 max-w-[760px] font-body text-lg leading-8 text-[#94A3B8]">
              We work with people building what comes next — from early ideas
              and growing businesses to teams ready to rethink how they work.
            </p>

            <div className="mt-10 grid border-y border-white/10 sm:grid-cols-5">
              {clients.map((client, index) => (
                <div
                  key={client}
                  className="group border-b border-white/10 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.03] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <div className="mb-2 font-mono text-[8px] tracking-[0.16em] text-[#475569]">
                    0{index + 1}
                  </div>

                  <div className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#F8FAFC] transition-colors duration-300 group-hover:text-[#22B8F0]">
                    {client}
                  </div>
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
        <div className="mx-auto grid min-h-[480px] max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-12 md:px-10 md:py-28 lg:px-16">
          <div>
            <p className="section-label text-[#0B1120]">07 / NEXT MOVE</p>
          </div>

          <div>
            <h2 className="max-w-[900px] font-display text-[clamp(3.75rem,7.5vw,8rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
              Got something
              <br />
              worth building?
            </h2>

            <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
              <Link
                href="/summon"
                className="bg-[#0B1120] px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0] transition-transform duration-300 hover:-translate-y-1"
              >
                SUMMON HOBBLITT&nbsp; ↗
              </Link>

              <Link
                href="/capabilities"
                className="border border-[#0B1120]/30 px-7 py-5 font-mono text-[9px] font-bold tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1120] hover:text-[#22B8F0]"
              >
                SEE CAPABILITIES&nbsp; ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
