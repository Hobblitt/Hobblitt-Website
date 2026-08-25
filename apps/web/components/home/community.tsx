import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const communityRoles = [
  "DEVELOPERS",
  "DESIGNERS",
  "MARKETERS",
  "CREATORS",
  "STRATEGISTS",
];

export function Community() {
  return (
    <section
      id="community"
      className="border-t border-[#E2E8F0]/10 bg-[#111827] px-margin py-28 md:py-36"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              08 / COMMUNITY
            </span>
          </div>

          <div>
            <p className="type-caption text-[9px] text-[#64748B]">
              PEOPLE BEHIND THE WORK
            </p>

            <h2 className="type-h1 mt-5 max-w-5xl text-5xl md:text-7xl lg:text-8xl">
              We&apos;re building
              <br />
              <span className="text-[#22B8F0]">more than a team.</span>
            </h2>

            <p className="type-body mt-8 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg">
              Great work rarely comes from one discipline. Hobblitt is also
              building a community of people who build, create, think, and share
              knowledge with one another.
            </p>

            <div className="mt-14 grid border-y border-[#E2E8F0]/10 sm:grid-cols-2 lg:grid-cols-3">
              {communityRoles.map((role, index) => (
                <div
                  key={role}
                  className="flex items-center gap-4 border-b border-[#E2E8F0]/10 px-5 py-5 last:border-b-0 sm:nth-[2n]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="type-caption text-[8px] text-[#475569]">
                    0{index + 1}
                  </span>
                  <span className="type-nav text-[9px] text-[#F8FAFC]">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="#summon"
                className="group type-nav inline-flex items-center gap-3 border border-[#E2E8F0]/15 px-5 py-3 text-[9px] text-[#94A3B8] transition-all duration-300 hover:border-[#22B8F0] hover:text-[#22B8F0]"
              >
                BUILD WITH US
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
