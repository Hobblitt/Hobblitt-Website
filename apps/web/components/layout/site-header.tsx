"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { cn } from "@hobblitt/ui/lib/utils";

import { BrandLogo } from "@/components/brand/brand-logo";
import { PrimaryNav } from "@/components/layout/primary-nav";

const mobileNavigation = [
  {
    number: "01",
    label: "ABOUT",
    href: "/about",
  },
  {
    number: "02",
    label: "CAPABILITIES",
    href: "/capabilities",
  },
  {
    number: "03",
    label: "APPROACH",
    href: "/approach",
  },
  {
    number: "04",
    label: "PRICING",
    href: "/pricing",
  },
];
export function SiteHeader({ className }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show the header at the very top.
      if (currentScrollY <= 20) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Keep the header visible while the mobile menu is open.
      if (mobileOpen) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Ignore tiny scroll movements.
      if (Math.abs(currentScrollY - lastScrollY) < 8) {
        return;
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down → hide.
        setHeaderVisible(false);
      } else {
        // Scrolling up → show.
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP / GLOBAL HEADER
      ========================================================= */}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "h-[76px]",
          "border-b border-white/[0.08]",
          "bg-[#0B1120]/90 backdrop-blur-xl",
          "transition-transform duration-300 ease-out",
          headerVisible ? "translate-y-0" : "-translate-y-full",
          className,
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-margin">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <BrandLogo priority />

          {/* =====================================================
              DESKTOP NAV
          ===================================================== */}

          <div className="hidden items-center gap-8 md:flex">
            <PrimaryNav />

            <div className="h-5 w-px bg-white/10" />

            <a
              href="mailto:hello@hobblitt.com"
              className="
                group
                inline-flex
                h-10
                items-center
                gap-3
                border
                border-[#22B8F0]/50
                px-4
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
              <ArrowUpRight
                className="
                  size-3
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
                aria-hidden="true"
              />
            </a>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((value) => !value)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/15
              text-[#F8FAFC]
              transition-colors
              hover:border-[#22B8F0]
              hover:text-[#22B8F0]
              md:hidden
            "
          >
            {mobileOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-40 bg-[#0B1120] transition-all duration-300 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-margin pb-10 pt-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#22B8F0]" />

            <span className="font-mono text-[8px] font-bold tracking-[0.25em] text-[#22B8F0]">
              HOBBLITT / INDEX
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Mobile navigation" className="mt-12">
            <ul className="flex flex-col">
              {mobileNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      py-6
                    "
                  >
                    <span className="flex items-center gap-5">
                      <span className="font-mono text-[8px] text-[#64748B]">
                        {item.number}
                      </span>

                      <span
                        className="
                          font-[var(--font-space-grotesk)]
                          text-3xl
                          font-bold
                          tracking-[-0.03em]
                          text-[#F8FAFC]
                          transition-colors
                          duration-300
                          group-hover:text-[#22B8F0]
                        "
                      >
                        {item.label}
                      </span>
                    </span>

                    <ArrowUpRight
                      className="
                        size-5
                        text-[#64748B]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#22B8F0]
                      "
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto">
            <p className="mb-4 font-mono text-[8px] tracking-[0.2em] text-[#64748B]">
              GOT SOMETHING WORTH BUILDING?
            </p>

            <a
              href="mailto:hello@hobblitt.com"
              onClick={closeMobileMenu}
              className="
                flex
                h-14
                items-center
                justify-between
                bg-[#22B8F0]
                px-5
                font-mono
                text-[9px]
                font-bold
                tracking-[0.18em]
                text-[#07111D]
              "
            >
              SUMMON HOBBLITT
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
