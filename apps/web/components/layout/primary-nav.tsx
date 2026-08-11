"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@hobblitt/ui/lib/utils";
import { primaryNav } from "@/lib/site-config";

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Masthead section links, ruled top and bottom like a newspaper index. */
export function PrimaryNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center justify-center gap-8", className)}>
      {primaryNav.map((item) => {
        const active = isActivePath(pathname, item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "px-2 py-1 font-stamp text-stamp uppercase transition-colors",
                "hover:bg-highlight hover:text-highlight-ink",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                active
                  ? "text-ink underline decoration-4 underline-offset-4"
                  : "text-ink-muted",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
