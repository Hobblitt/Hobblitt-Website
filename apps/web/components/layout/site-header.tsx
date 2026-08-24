"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@hobblitt/ui/lib/utils";

const navigation = [
  { number: "01", label: "ABOUT", href: "/about" },
  { number: "02", label: "CAPABILITIES", href: "/capabilities" },
  { number: "03", label: "APPROACH", href: "/approach" },
  { number: "04", label: "PRICING", href: "/pricing" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ===================================================== HEADER */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[72px]",
          "border-b border-[#E2E8F0]/10",
          "bg-[#111827]",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Hobblitt home"
            className="inline-flex shrink-0 items-center"
            onClick={(event) => {
              closeMenu();
              if (pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/brand/hobblitt-logo.png"
              alt="Hobblitt"
              width={170}
              height={42}
              priority
              className="h-auto w-[138px] object-contain md:w-[158px]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group relative inline-flex items-center gap-2 py-2",
                          "type-nav text-[10px]",
                          "transition-colors duration-300",
                          isActive
                            ? "text-[#F8FAFC]"
                            : "text-[#94A3B8] hover:text-[#F8FAFC]",
                        )}
                      >
                        <span
                          className={cn(
                            "text-[8px] tracking-[0.16em]",
                            isActive ? "text-[#22B8F0]" : "text-[#475569]",
                          )}
                        >
                          {item.number}
                        </span>
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-0 bottom-0 h-px origin-left bg-[#22B8F0]",
                            "transition-transform duration-300",
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <span aria-hidden="true" className="h-5 w-px bg-[#E2E8F0]/15" />

            <Link
              href="/summon"
              className={cn(
                "inline-flex items-center gap-4",
                "border border-[#22B8F0]/50 px-5 py-3",
                "type-nav text-[9px] text-[#22B8F0]",
                "transition-all duration-300",
                "hover:border-[#22B8F0] hover:bg-[#22B8F0] hover:text-[#111827]",
              )}
            >
              <span>SUMMON HOBBLITT</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "inline-flex items-center gap-3 border px-4 py-3",
              "type-nav text-[9px]",
              "transition-all duration-300",
              menuOpen
                ? "border-[#22B8F0] bg-[#22B8F0] text-[#111827]"
                : "border-[#22B8F0]/50 text-[#22B8F0] hover:border-[#22B8F0]",
              "md:hidden",
            )}
          >
            <span>{menuOpen ? "CLOSE" : "MENU"}</span>
            <span aria-hidden="true" className="text-[11px] leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </header>

      {/* ===================================================== MOBILE NAV */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 md:hidden",
          "border-b border-[#E2E8F0]/10 bg-[#111827]",
          "transition-all duration-300",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0",
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[1440px] px-6 py-6"
        >
          <div className="border border-[#E2E8F0]/10 bg-[#111827]">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center justify-between border-b border-[#E2E8F0]/10 px-5 py-5",
                    "transition-colors duration-300",
                    isActive
                      ? "bg-[#1A2438] text-[#F8FAFC]"
                      : "text-[#94A3B8] hover:bg-[#1A2438] hover:text-[#F8FAFC]",
                  )}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={cn(
                        "text-[8px] font-bold tracking-[0.16em]",
                        isActive ? "text-[#22B8F0]" : "text-[#475569]",
                      )}
                    >
                      {item.number}
                    </span>
                    <span className="type-nav text-[10px]">{item.label}</span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-sm",
                      isActive ? "text-[#22B8F0]" : "text-[#475569]",
                    )}
                  >
                    ↗
                  </span>
                </Link>
              );
            })}

            <Link
              href="/summon"
              onClick={closeMenu}
              className={cn(
                "flex items-center justify-between m-4",
                "border border-[#22B8F0]/60 px-5 py-4",
                "type-nav text-[9px] text-[#22B8F0]",
                "transition-all duration-300",
                "hover:border-[#22B8F0] hover:bg-[#22B8F0] hover:text-[#111827]",
              )}
            >
              <span>SUMMON HOBBLITT</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
