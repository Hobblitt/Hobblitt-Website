import Link from "next/link";

import { cn } from "@hobblitt/ui/lib/utils";

const navigation = [
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

export function PrimaryNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Primary navigation">
      <ul className={cn("flex items-center gap-8", className)}>
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                group
                relative
                py-2
                font-mono
                text-[9px]
                font-bold
                tracking-[0.18em]
                text-[#94A3B8]
                transition-colors
                duration-300
                hover:text-[#F8FAFC]
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-px
                  origin-left
                  scale-x-0
                  bg-[#22B8F0]
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
