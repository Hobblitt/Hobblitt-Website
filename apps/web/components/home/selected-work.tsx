"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects, type ProjectCategory } from "@/lib/projects";

const filters: ("ALL" | ProjectCategory)[] = [
  "ALL",
  "BUILD",
  "AUTOMATE",
  "GROW",
];

function ProjectVisual({
  category,
  number,
}: {
  category: string;
  number: string;
}) {
  return (
    <div className="work-project-visual relative min-h-[260px] overflow-hidden md:min-h-[320px]">
      <div className="absolute left-5 top-5 z-10 border border-[#22B8F0]/50 px-4 py-3">
        <span className="type-caption text-[8px] text-[#22B8F0]">
          {category}
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[62%] w-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="work-signal-ring absolute inset-0 rounded-full border border-[#22B8F0]/20" />
        <div className="work-signal-ring work-signal-ring-delay-1 absolute inset-[12%] rounded-full border border-[#22B8F0]/25" />
        <div className="work-signal-ring work-signal-ring-delay-2 absolute inset-[25%] rounded-full border border-[#22B8F0]/30" />
        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#22B8F0]/40" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#22B8F0]/20" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#22B8F0]/20" />
        <div className="absolute right-[3%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#22B8F0] shadow-[0_0_20px_rgba(34,184,240,0.8)]" />
      </div>

      <span className="type-caption absolute bottom-5 left-5 text-[8px] text-[#64748B]">
        HOBBLITT / {number}
      </span>
      <div className="absolute bottom-5 right-5 h-10 w-10 border border-[#F8FAFC]/[0.08]" />
    </div>
  );
}

export function SelectedWork() {
  const [filter, setFilter] = useState<"ALL" | ProjectCategory>("ALL");

  const projects = useMemo(
    () =>
      filter === "ALL"
        ? featuredProjects
        : featuredProjects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section
      id="work"
      className="border-t border-[#111827]/10 bg-[#F1F4F7] px-margin py-28 text-[#111827] md:py-36"
    >
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              06 / SELECTED WORK
            </span>
          </div>

          <div>
            <span className="type-caption text-[8px] text-[#94A3B8]">
              THINGS WE&apos;VE BUILT
            </span>

            <h2 className="type-h1 mt-6 max-w-6xl text-5xl md:text-7xl lg:text-[88px]">
              Work that
              <br />
              <span className="text-[#22B8F0]">moves things forward.</span>
            </h2>

            <p className="type-body mt-8 max-w-2xl text-base leading-7 text-[#64748B] md:text-lg">
              Websites. Products. AI systems. Brand experiences. A selection of
              things we&apos;ve built, shaped, and helped move forward.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-16 flex flex-wrap items-center gap-3 border-y border-[#111827]/10 py-4">
          <span className="type-caption mr-3 text-[9px] text-[#94A3B8]">
            FILTER
          </span>
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`type-caption border px-5 py-2 text-[9px] transition-colors ${
                filter === item
                  ? "border-[#111827] bg-[#111827] text-white"
                  : "border-[#111827]/15 text-[#475569] hover:border-[#111827] hover:text-[#111827]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-10 grid border-l border-t border-[#111827]/10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group border-b border-r border-[#111827]/10"
            >
              <ProjectVisual
                category={project.category}
                number={project.number}
              />

              <div className="p-6 md:p-8 lg:p-9">
                <div className="flex items-center justify-between">
                  <span className="type-caption text-[8px] text-[#94A3B8]">
                    {project.year}
                  </span>
                  <span className="type-caption text-[8px] text-[#22B8F0]">
                    {project.status}
                  </span>
                </div>

                <span className="type-caption mt-10 block text-[9px] text-[#22B8F0]">
                  {project.type}
                </span>

                <h3 className="type-h2 mt-5 max-w-xl text-3xl md:text-4xl">
                  {project.title}
                </h3>

                <p className="type-body mt-6 max-w-2xl text-sm leading-7 text-[#64748B] md:text-base">
                  {project.description}
                </p>

                <div className="mt-10 flex items-end justify-between gap-6">
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

                  <Link
                    href={`/work/${project.slug}`}
                    aria-label={`View ${project.title}`}
                    className="flex size-10 shrink-0 items-center justify-center border border-[#111827]/10 transition-all duration-200 group-hover:border-[#22B8F0] group-hover:bg-[#22B8F0]"
                  >
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="type-body mt-10 text-sm text-[#64748B]">
            Nothing in this category yet — check back soon.
          </p>
        )}

        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="type-caption inline-flex items-center gap-4 border border-[#111827]/15 px-6 py-4 text-[9px] transition-all duration-200 hover:border-[#22B8F0] hover:bg-[#111827] hover:text-white"
          >
            VIEW ALL WORK
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
