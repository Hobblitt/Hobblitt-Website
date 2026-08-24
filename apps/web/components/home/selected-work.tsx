import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/lib/projects";

function ProjectVisual({
  category,
  number,
}: {
  category: string;
  number: string;
}) {
  return (
    <div className="work-project-visual relative min-h-[260px] overflow-hidden md:min-h-[320px]">
      {/* Category stamp */}
      <div className="absolute left-5 top-5 z-10 border border-[#22B8F0]/50 px-4 py-3">
        <span className="font-stamp text-[8px] font-bold tracking-[0.2em] text-[#22B8F0]">
          {category}
        </span>
      </div>

      {/* Signal system */}
      <div className="absolute left-1/2 top-1/2 h-[62%] w-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="work-signal-ring absolute inset-0 rounded-full border border-[#22B8F0]/20" />

        <div className="work-signal-ring work-signal-ring-delay-1 absolute inset-[12%] rounded-full border border-[#22B8F0]/25" />

        <div className="work-signal-ring work-signal-ring-delay-2 absolute inset-[25%] rounded-full border border-[#22B8F0]/30" />

        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#22B8F0]/40" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#22B8F0]/20" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#22B8F0]/20" />

        <div className="absolute right-[3%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#22B8F0] shadow-[0_0_20px_rgba(34,184,240,0.8)]" />
      </div>

      {/* Project index */}
      <span className="absolute bottom-5 left-5 font-stamp text-[8px] tracking-[0.22em] text-[#64748B]">
        HOBBLITT / {number}
      </span>

      {/* Decorative corner */}
      <div className="absolute bottom-5 right-5 h-10 w-10 border border-white/[0.08]" />
    </div>
  );
}

export function SelectedWork() {
  const projects = featuredProjects.slice(0, 2);

  return (
    <section
      id="work"
      className="border-t border-[#0B1120]/10 bg-[#F1F4F7] px-margin py-28 text-[#0B1120] md:py-36"
    >
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="section-label text-[#22B8F0]">
              05 / SELECTED WORK
            </span>
          </div>

          <div>
            <span className="font-stamp text-[8px] font-bold tracking-[0.24em] text-[#94A3B8]">
              THINGS WE&apos;VE BUILT
            </span>

            <h2 className="mt-6 max-w-6xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[88px]">
              Work that
              <br />
              <span className="text-[#22B8F0]">moves things forward.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-body text-base leading-7 text-[#64748B] md:text-lg">
              Websites. Products. AI systems. Brand experiences. A selection of
              things we&apos;ve built, shaped, and helped move forward.
            </p>
          </div>
        </div>

        {/* Capability strip */}
        <div className="mt-16 grid border-y border-[#0B1120]/10 md:grid-cols-3">
          <div className="border-b border-[#0B1120]/10 px-5 py-6 md:border-b-0 md:border-r">
            <div className="flex items-center gap-3">
              <span className="font-stamp text-[8px] text-[#94A3B8]">01</span>

              <span className="font-stamp text-[9px] font-bold tracking-[0.18em]">
                BUILD
              </span>
            </div>

            <p className="mt-4 font-body text-sm text-[#64748B]">
              Digital products, platforms, and experiences.
            </p>
          </div>

          <div className="border-b border-[#0B1120]/10 px-5 py-6 md:border-b-0 md:border-r">
            <div className="flex items-center gap-3">
              <span className="font-stamp text-[8px] text-[#94A3B8]">02</span>

              <span className="font-stamp text-[9px] font-bold tracking-[0.18em]">
                AUTOMATE
              </span>
            </div>

            <p className="mt-4 font-body text-sm text-[#64748B]">
              AI, systems, workflows, and intelligent operations.
            </p>
          </div>

          <div className="px-5 py-6">
            <div className="flex items-center gap-3">
              <span className="font-stamp text-[8px] text-[#94A3B8]">03</span>

              <span className="font-stamp text-[9px] font-bold tracking-[0.18em]">
                GROW
              </span>
            </div>

            <p className="mt-4 font-body text-sm text-[#64748B]">
              Brands, content, visibility, and digital momentum.
            </p>
          </div>
        </div>

        {/* Featured projects */}
        <div className="mt-16 grid border-l border-t border-[#0B1120]/10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group border-b border-r border-[#0B1120]/10"
            >
              <ProjectVisual
                category={project.category}
                number={project.number}
              />

              <div className="p-6 md:p-8 lg:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-stamp text-[8px] tracking-[0.2em] text-[#94A3B8]">
                    {project.year}
                  </span>

                  <span className="font-stamp text-[8px] font-bold tracking-[0.2em] text-[#22B8F0]">
                    {project.status}
                  </span>
                </div>

                <span className="mt-10 block font-stamp text-[9px] font-bold tracking-[0.2em] text-[#22B8F0]">
                  {project.type}
                </span>

                <h3 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-[#64748B] md:text-base">
                  {project.description}
                </p>

                <div className="mt-10 flex items-end justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="border border-[#0B1120]/10 px-3 py-2 font-stamp text-[8px] tracking-[0.1em] text-[#64748B]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    aria-label={`View ${project.title}`}
                    className="
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#0B1120]/10
                      transition-all
                      duration-200
                      group-hover:border-[#22B8F0]
                      group-hover:bg-[#22B8F0]
                    "
                  >
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="
              inline-flex
              items-center
              gap-4
              border
              border-[#0B1120]/15
              px-6
              py-4
              font-stamp
              text-[9px]
              font-bold
              tracking-[0.18em]
              transition-all
              duration-200
              hover:border-[#22B8F0]
              hover:bg-[#0B1120]
              hover:text-white
            "
          >
            VIEW ALL WORK
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
