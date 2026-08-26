import { featuredProjects } from "@/lib/projects";

const selectedProjects = [
  featuredProjects.find((project) => project.slug === "digital-platform"),
  featuredProjects.find((project) => project.slug === "ai-code-review"),
  featuredProjects.find((project) => project.slug === "growth-system"),
].filter((project): project is (typeof featuredProjects)[number] =>
  Boolean(project),
);

const categoryStyles = {
  BUILD: "text-[#22B8F0]",
  AUTOMATE: "text-[#22B8F0]",
  GROW: "text-[#22B8F0]",
} as const;

function ProjectVisual({
  category,
  number,
}: {
  category: keyof typeof categoryStyles;
  number: string;
}) {
  return (
    <div className="work-project-visual relative min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-[360px]">
      <div className="absolute left-5 top-5 border border-[#22B8F0]/50 px-4 py-3 sm:left-6 sm:top-6">
        <span className="type-caption text-[8px] text-[#22B8F0]">
          {category}
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[58%] w-[46%] -translate-x-1/2 -translate-y-1/2">
        <div className="work-signal-ring absolute inset-0 rounded-full border border-[#22B8F0]/20" />

        <div className="work-signal-ring work-signal-ring-delay-1 absolute inset-[12%] rounded-full border border-[#22B8F0]/25" />

        <div className="work-signal-ring work-signal-ring-delay-2 absolute inset-[25%] rounded-full border border-[#22B8F0]/30" />

        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#22B8F0]/40" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#22B8F0]/20" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#22B8F0]/20" />

        <div className="absolute right-[2%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#22B8F0] shadow-[0_0_20px_rgba(34,184,240,0.8)]" />
      </div>

      <span className="type-caption absolute bottom-5 left-5 text-[8px] text-[#64748B] sm:bottom-6 sm:left-6">
        HOBBLITT / {number}
      </span>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="border-t border-[#111827]/10 bg-[#F1F5F9] px-margin py-20 text-[#111827] md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.32fr_minmax(0,0.68fr)] lg:gap-20">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              07 / SELECTED WORK
            </span>
          </div>

          <div className="min-w-0">
            <span className="type-caption text-[8px] text-[#94A3B8]">
              PROOF OF WHAT WE CAN DO
            </span>

            {/* Was lg:text-[88px], which set "Things we've helped" wider than
                the 0.68fr column it lives in. */}
            <h2 className="type-h1 mt-5 max-w-6xl text-[clamp(2.25rem,6.5vw,5.5rem)]">
              Things we&apos;ve helped
              <br />
              <span className="text-[#22B8F0]">move forward.</span>
            </h2>

            <p className="type-body mt-6 max-w-2xl text-base leading-7 text-[#64748B] md:mt-8 md:text-lg">
              A small selection of work showing how Hobblitt brings product,
              engineering, automation, and growth together around a problem.
            </p>
          </div>
        </div>

        {/* Three proof projects — three across only from lg; at md each card
            would be ~230px wide, too narrow for its heading and tag row. */}
        <div className="mt-12 grid border-l border-t border-[#111827]/10 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project, index) => (
            <article
              key={project.slug}
              /* Three projects in a two-up grid would leave a hole; the last
                 one spans the row instead until the three-column layout. */
              className="group border-b border-r border-[#111827]/10 sm:last:col-span-2 lg:last:col-span-1"
            >
              <ProjectVisual
                category={project.category}
                number={String(index + 1).padStart(2, "0")}
              />

              <div className="flex flex-col justify-between p-6 sm:min-h-[360px] sm:p-7 md:p-8 lg:p-9">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="type-caption text-[8px] text-[#94A3B8]">
                      {project.year}
                    </span>

                    <span
                      className={`type-caption text-[8px] ${
                        categoryStyles[project.category]
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="type-caption mt-8 text-[9px] text-[#22B8F0] sm:mt-10">
                    {project.type}
                  </p>

                  <h3 className="type-h2 mt-4 text-2xl lg:text-3xl">
                    {project.title}
                  </h3>

                  <p className="type-body mt-5 text-sm leading-7 text-[#64748B]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 sm:mt-10">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="type-caption border border-[#111827]/10 px-3 py-2 text-[8px] text-[#64748B]"
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

        {/* Future portfolio link */}
        <div className="mt-10 flex justify-end">
          <span className="type-caption border border-[#111827]/15 px-6 py-4 text-[9px] text-[#64748B]">
            FULL PORTFOLIO COMING SOON
          </span>
        </div>
      </div>
    </section>
  );
}
