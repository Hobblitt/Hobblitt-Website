import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";

const footerNavigation = [
  { label: "ABOUT", href: "/about" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "PRICING", href: "/pricing" },
  { label: "APPROACH", href: "/approach" },
];

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={`border-t border-[#E2E8F0]/10 bg-[#111827] px-margin py-14 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <BrandLogo />
            <p className="type-body mt-5 max-w-xs text-sm leading-6 text-[#94A3B8]">
              Digital partners for businesses building what comes next.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-nav text-[9px] text-[#94A3B8] transition-colors duration-300 hover:text-[#22B8F0]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <p className="type-caption mb-4 text-[8px] text-[#94A3B8]">
              GOT SOMETHING WORTH BUILDING?
            </p>
            <a
              href="mailto:hello@hobblitt.com"
              className="group inline-flex items-center gap-3 border border-[#22B8F0]/50 px-5 py-3 type-nav text-[9px] text-[#22B8F0] transition-all duration-300 hover:border-[#22B8F0] hover:bg-[#22B8F0] hover:text-[#111827]"
            >
              SUMMON HOBBLITT
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#E2E8F0]/[0.08] pt-5 md:flex-row md:items-center md:justify-between">
          <span className="type-caption text-[8px] text-[#475569]">
            TECHNOLOGY · CREATIVITY · STRATEGY
          </span>
          <span className="type-caption text-[8px] text-[#475569]">
            © 2026 HOBBLITT. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}