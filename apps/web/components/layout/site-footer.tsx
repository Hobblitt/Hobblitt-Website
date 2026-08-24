import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";

const footerNavigation = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "CAPABILITIES",
    href: "#capabilities",
  },
  {
    label: "WORK",
    href: "#work",
  },
  {
    label: "APPROACH",
    href: "#approach",
  },
];

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={`
        border-t
        border-white/10
        bg-[#0B1120]
        px-margin
        py-14
        ${className ?? ""}
      `}
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        {/* =======================================================
            MAIN FOOTER
        ======================================================= */}

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <BrandLogo />

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#64748B]">
              Digital partners for businesses building what comes next.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-5 font-mono text-[8px] font-bold tracking-[0.22em] text-[#22B8F0]">
              EXPLORE
            </p>

            <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      font-mono
                      text-[9px]
                      font-bold
                      tracking-[0.16em]
                      text-[#94A3B8]
                      transition-colors
                      duration-300
                      hover:text-[#22B8F0]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <p className="mb-4 font-mono text-[8px] font-bold tracking-[0.2em] text-[#64748B]">
              GOT SOMETHING WORTH BUILDING?
            </p>

            <a
              href="mailto:hello@hobblitt.com"
              className="
                group
                inline-flex
                items-center
                gap-3
                border
                border-[#22B8F0]/50
                px-5
                py-3
                font-mono
                text-[9px]
                font-bold
                tracking-[0.16em]
                text-[#22B8F0]
                transition-all
                duration-300
                hover:border-[#22B8F0]
                hover:bg-[#22B8F0]
                hover:text-[#07111D]
              "
            >
              SUMMON HOBBLITT
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.08]
            pt-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span className="font-mono text-[8px] tracking-[0.18em] text-[#475569]">
            TECHNOLOGY · CREATIVITY · STRATEGY
          </span>

          <span className="font-mono text-[8px] tracking-[0.18em] text-[#475569]">
            © 2026 HOBBLITT. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
