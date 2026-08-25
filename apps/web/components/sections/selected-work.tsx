import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/lib/projects";

const categoryStyles = {
  BUILD: "text-[#22B8F0]",
  AUTOMATE: "text-[#22B8F0]",
  GROW: "text-[#22B8F0]",
} as const;

export function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#F8FAFC] px-6 py-24 text-[#0B1120] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#22B8F0]">
              05 / Selected Work
            </p>
          </div>

          <div className="max-w-5xl">
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[6.5rem]">
              Things we&apos;ve helped
              <br />
              <span className="text-[#22B8F0]">move forward.</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#64748B] md:text-xl">
              Websites. Products. Systems. Campaigns. Whatever the problem
              needed, we brought the right capabilities together to move it
              forward.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-16 border-y border-[#CBD5E1] py-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mr-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#94A3B8]">
              Filter
            </span>

            <button
              type="button"
              className="border border-[#0B1120] bg-[#0B1120] px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white"
            >
              All
            </button>

            <button
              type="button"
              className="border border-[#CBD5E1] px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569] transition-colors hover:border-[#0B1120] hover:text-[#0B1120]"
            >
              Build
            </button>

            <button
              type="button"
              className="border border-[#CBD5E1] px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569] transition-colors hover:border-[#0B1120] hover:text-[#0B1120]"
            >
              Automate
            </button>

            <button
              type="button"
              className="border border-[#CBD5E1] px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569] transition-colors hover:border-[#0B1120] hover:text-[#0B1120]"
            >
              Grow
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-px bg-[#CBD5E1] md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={[
                  "group bg-[#F8FAFC]",
                  isFeatured ? "md:col-span-2" : "",
                ].join(" ")}
              >
                <article
                  className={[
                    "grid h-full",
                    isFeatured
                      ? "lg:grid-cols-[minmax(0,1.65fr)_minmax(360px,0.75fr)]"
                      : "",
                  ].join(" ")}
                >
                  {/* Visual */}
                  <div
                    className={[
                      "relative overflow-hidden bg-[#0B1120]",
                      isFeatured
                        ? "min-h-[420px] lg:min-h-[560px]"
                        : "min-h-[300px]",
                    ].join(" ")}
                  >
                    {/* Temporary project visual */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22B8F0]" />
                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#22B8F0]" />
                      <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-[#22B8F0]" />
                      <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-[#22B8F0]" />
                    </div>

                    <div className="absolute left-6 top-6 border border-[#22B8F0]/50 px-3 py-2">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[#22B8F0]">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-400">
                        HOBBLITT / {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowUpRight
                        className="size-6 text-[#22B8F0] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex min-h-[300px] flex-col justify-between bg-[#F8FAFC] p-8 md:p-10 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[#94A3B8]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${categoryStyles[project.category]}`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-12 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#22B8F0]">
                        {project.type}
                      </p>

                      <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-base leading-7 text-[#64748B]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B1120]">
                        View project
                      </span>

                      <span className="ml-3 text-sm">↗</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* All work */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="border border-[#0B1120] px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] transition-colors hover:bg-[#0B1120] hover:text-white"
          >
            View all work ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
