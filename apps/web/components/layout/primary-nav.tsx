"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@hobblitt/ui/lib/utils";

const navigation = [
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "CAPABILITIES",
    href: "/capabilities",
  },
  {
    label: "APPROACH",
    href: "/approach",
  },
  {
    label: "PRICING",
    href: "/pricing",
  },
];

export function PrimaryNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul className={cn("flex items-center gap-8", className)}>
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative py-2 font-mono text-[9px] font-bold tracking-[0.18em] transition-colors duration-300",
                  isActive
                    ? "text-[#F8FAFC]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]",
                )}
              >
                {item.label}

                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px origin-left bg-[#22B8F0] transition-transform duration-300",
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
  );
}
