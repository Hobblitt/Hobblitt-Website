"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@hobblitt/ui/lib/utils";
import { isActivePath } from "@/components/layout/primary-nav";
import { mobileTabs } from "@/lib/site-config";

/**
 * Fixed bottom tab bar, mobile only. `app/layout.tsx` reserves matching
 * bottom padding so no content hides behind it.
 */
export function MobileTabBar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper shadow-ink-up md:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        className,
      )}
    >
      <ul className="flex items-stretch justify-around px-2 py-2">
        {mobileTabs.map((tab) => {
          const active = isActivePath(pathname, tab.href);
          const Icon = tab.icon;

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex flex-col items-center justify-center gap-1 p-1 transition-transform active:scale-95",
                  active
                    ? "scale-105 border-2 border-ink bg-highlight-strong text-highlight-ink"
                    : "text-ink hover:bg-newsprint-high",
                )}
              >
                <Icon
                  className="size-5 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                  strokeWidth={active ? 2.5 : 2}
                />
                <span className="font-stamp text-stamp uppercase">
                  {tab.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
