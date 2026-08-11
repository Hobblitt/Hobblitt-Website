"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { IconButton } from "@/components/ui/icon-button";
import { Kicker } from "@/components/ui/kicker";
import { footerNav, primaryNav, siteConfig } from "@/lib/site-config";
import { isActivePath } from "@/components/layout/primary-nav";

const PANEL_ID = "site-menu-panel";

/**
 * The masthead index button and its full-height drawer. Closes on Escape, on
 * backdrop click and whenever the route changes; locks background scroll and
 * returns focus to the trigger.
 */
export function SiteMenu({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Close whenever navigation lands on a new route. Adjusting state during
  // render (rather than in an effect) avoids a cascading re-render.
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <IconButton
        ref={triggerRef}
        className={className}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={open ? "Close index" : "Open index"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </IconButton>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id={PANEL_ID}
        ref={panelRef}
        role="dialog"
        aria-modal={open}
        aria-label="Site index"
        inert={!open}
        className={cn(
          "fixed inset-y-0 start-0 z-50 flex w-[min(22rem,85vw)] flex-col",
          "border-e-4 border-ink bg-paper shadow-ink-lg",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b-2 border-ink px-6 py-4">
          <Kicker variant="plain" className="text-ink">
            The Index
          </Kicker>
          <IconButton
            aria-label="Close index"
            className="size-9 shadow-ink-sm"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <X className="size-4" aria-hidden="true" />
          </IconButton>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group flex flex-col gap-1 border-b border-ink/20 py-3 transition-colors",
                      "hover:bg-highlight hover:text-highlight-ink",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                    )}
                  >
                    <span className="flex items-center justify-between font-display text-subtitle uppercase">
                      {item.label}
                      <ArrowUpRight
                        className={cn(
                          "size-5 transition-transform",
                          active
                            ? "translate-x-0"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                    {item.description ? (
                      <span className="font-serif text-copy text-ink-muted group-hover:text-highlight-ink">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t-2 border-ink px-6 py-4">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-stamp text-stamp uppercase text-ink-muted hover:text-ink hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-stamp text-stamp uppercase text-ink-faint">
            {siteConfig.legalName}
          </p>
        </div>
      </div>
    </>
  );
}
