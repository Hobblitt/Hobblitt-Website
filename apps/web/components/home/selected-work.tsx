import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  number: string;
  title: string;
  category: "BUILD" | "AUTOMATE" | "GROW";
  type: string;
  description: string;
  image?: string;
  href?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Digital Product",
    category: "BUILD",
    type: "WEB APPLICATION",
    description:
      "A focused digital product designed to turn a complex workflow into a simple experience.",
    href: "#",
    featured: true,
  },
  {
    number: "02",
    title: "AI Workflow System",
    category: "AUTOMATE",
    type: "AI / AUTOMATION",
    description:
      "An intelligent workflow that removes repetitive work and helps teams move faster.",
    href: "#",
  },
  {
    number: "03",
    title: "Growth Engine",
    category: "GROW",
    type: "DIGITAL EXPERIENCE",
    description:
      "A digital experience built to strengthen presence, engagement, and momentum.",
    href: "#",
  },
];

const categoryLabels = {
  BUILD: "BUILD",
  AUTOMATE: "AUTOMATE",
  GROW: "GROW",
};

export function SelectedWork() {
  return (
    <section
      id="work"
      className="border-t border-slate-300 bg-[#F8FAFC] px-margin py-28 text-[#0B1120] md:py-36"
    >
      <div className="mx-auto max-w-screen-2xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#22B8F0]">
              05 / SELECTED WORK
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl font-[var(--font-space-grotesk)] text-5xl font-bold leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Things we&apos;ve helped
              <br />
              <span className="text-[#22B8F0]">move forward.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#64748B] md:text-lg">
              Websites. Products. Systems. Campaigns. Brands. Whatever the
              problem needed, we brought the right capabilities together to move
              it forward.
            </p>
          </div>
        </div>

        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div className="mt-16 flex flex-wrap gap-2 border-y border-[#0B1120]/10 py-4">
          <span className="mr-3 font-mono text-[9px] font-bold tracking-[0.16em] text-[#94A3B8]">
            FILTER
          </span>

          {Object.keys(categoryLabels).map((category) => (
            <span
              key={category}
              className="
                border
                border-[#0B1120]/10
                px-3
                py-2
                font-mono
                text-[8px]
                font-bold
                tracking-[0.14em]
                text-[#64748B]
              "
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </span>
          ))}
        </div>

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}

        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <Link
              key={project.number}
              href={project.href ?? "#"}
              className="
                group
                mt-10
                block
                overflow-hidden
                border
                border-[#0B1120]/10
                bg-white
              "
            >
              <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111827]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />
                  ) : (
                    <ProjectPlaceholder />
                  )}

                  <div className="absolute left-5 top-5 border border-white/20 bg-[#0B1120]/80 px-3 py-2 backdrop-blur-sm">
                    <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-[#22B8F0]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Information */}
                <div className="flex min-h-[360px] flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#94A3B8]">
                        {project.number}
                      </span>

                      <ArrowUpRight
                        className="
                          size-5
                          text-[#94A3B8]
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-[#22B8F0]
                        "
                      />
                    </div>

                    <p className="mt-14 font-mono text-[8px] font-bold tracking-[0.16em] text-[#22B8F0]">
                      {project.type}
                    </p>

                    <h3 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-[#64748B]">
                      {project.description}
                    </p>
                  </div>

                  <span className="mt-10 inline-flex items-center gap-3 font-mono text-[9px] font-bold tracking-[0.16em] text-[#0B1120]">
                    VIEW PROJECT
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <Link
                key={project.number}
                href={project.href ?? "#"}
                className="
                  group
                  overflow-hidden
                  border
                  border-[#0B1120]/10
                  bg-white
                  transition-colors
                  duration-300
                  hover:border-[#22B8F0]/50
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#111827]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />
                  ) : (
                    <ProjectPlaceholder />
                  )}
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#94A3B8]">
                      {project.number}
                    </span>

                    <span className="font-mono text-[8px] font-bold tracking-[0.14em] text-[#22B8F0]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-10 font-[var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.035em]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-mono text-[8px] font-bold tracking-[0.16em] text-[#0B1120]">
                    VIEW PROJECT
                    <ArrowUpRight
                      className="
                        size-3
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* =====================================================
            ARCHIVE CTA
        ===================================================== */}

        <div className="mt-12 flex justify-center md:justify-end">
          <Link
            href="/work"
            className="
              group
              inline-flex
              items-center
              gap-3
              border
              border-[#0B1120]
              px-6
              py-4
              font-mono
              text-[9px]
              font-bold
              tracking-[0.16em]
              transition-all
              duration-300
              hover:bg-[#0B1120]
              hover:text-[#F8FAFC]
            "
          >
            VIEW ALL WORK
            <ArrowUpRight
              className="
                size-4
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PLACEHOLDER
   ========================================================= */

function ProjectPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex h-32 w-32 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#22B8F0]/20" />
        <div className="absolute inset-5 rounded-full border border-[#22B8F0]/30" />

        <div className="h-3 w-3 rounded-full bg-[#22B8F0] shadow-[0_0_30px_8px_rgba(34,184,240,0.25)]" />
      </div>

      <span className="absolute bottom-5 left-5 font-mono text-[8px] tracking-[0.18em] text-[#64748B]">
        PROJECT PREVIEW
      </span>
    </div>
  );
}
